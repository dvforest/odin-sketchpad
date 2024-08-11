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
            div.style.backgroundColor = "rgba(0,0,0,1)";
        });
        
        container.appendChild(div);
    }
}
