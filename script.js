// INITIALIZE

// Default grid
const container = document.querySelector(".flex-container");
const resolution = 512;
container.style.width = resolution + "px";
container.style.height = resolution + "px";
let subdiv = 8;
subdivideGrid(subdiv);

// Reset button
const resetButton = document.querySelector(".reset-button");
resetButton.addEventListener("click", e => {
    subdiv = parseInt(prompt("Enter subdivisions (1-100):", subdiv));
    subdivideGrid(subdiv);
});


// FUNCTIONS

function subdivideGrid(s){

    // Limit subdivisions to range 1-100
    s = Math.max(1, Math.min(s, 100));
    
    // Clear grid
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }
    // Subdivide grid
    for (let i = 0; i < s**2; i++){
        
        // Create one div and set attributes
        const div = document.createElement("div");
        let size = resolution / s;
        div.style.width = size.toString() + "px";
        div.style.height = size.toString() + "px";
        div.style.boxSizing = "border-box";
        div.style.backgroundColor = "rgba(0,0,0,0)";
        div.classList.toggle("grid");
        div.setAttribute("id", i);
        
        // Add mousehover event
        div.addEventListener("mouseover", (e) => {
            let currentRgba = e.target.style.backgroundColor;
            if (currentRgba.match(/rgba/)) {
                let newRgba = currentRgba.match(/rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d*\.?\d+)\)\s*/); // store RGBA in array
                let r = newRgba[1];
                let g = newRgba[2];
                let b = newRgba[3];
                let a = parseFloat(newRgba[4]);
                a = Math.min(a + 0.1, 1); // Add 10% to alpha and limit it to 1
                e.target.style.backgroundColor = `rgba(${r},${g},${b},${a})`;
            }
        });
        
        container.appendChild(div);
    }
}
