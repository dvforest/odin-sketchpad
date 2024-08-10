// INITIALIZE

// Default grid
const container = document.querySelector(".flex-container");
let subdiv = 8;
subdivideGrid(subdiv);

// Reset button
const resetButton = document.querySelector(".reset-button");
resetButton.addEventListener("click", e => {
    subdiv = parseInt(prompt("Enter subdivisions:", subdiv));
    subdivideGrid(subdiv);
});


// FUNCTIONS

function subdivideGrid(s){
    // Clear grid
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }
    // Subdivide grid
    for (let i = 0; i < s**2; i++){
        const div = document.createElement("div");
        let size = 512 / s;
        div.style.width = size.toString() + "px";
        div.style.height = size.toString() + "px";
        div.style.boxSizing = "border-box";
        div.classList.toggle("grid");
        div.setAttribute("id", "grid-"+ i);
        container.appendChild(div);
    }
}