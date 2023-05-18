const container = document.querySelector(".container");
const root = document.querySelector(":root");

//grid size selection
const button = document.querySelector(".gridSelection");
button.addEventListener("click", resize);
function resize(){
    clearGrid()
    userInput = prompt("Pleas provide a number between 1 and 100 to determine the grid size", "16");
    userInput = Math.pow(userInput, 2);
    createGrid(userInput)
};

createGrid(16)

function createGrid(x) {
    //define grid measure and flexBasis to distribute evenly
    let gridMeasure = x;
    let flexBasisCalc = (100/(Math.sqrt(gridMeasure)));
    let flexBasicStr = "calc(" + flexBasisCalc + "%)";
    //create every grid element and set variable flexbasis for CSS
    for (let i = 0; i < gridMeasure; i++) {
        var grid = document.createElement("div");
        grid.classList.add("grid");
        grid.setAttribute("id", `grid${i}`);
        root.style.setProperty("--flexBasic", `${flexBasicStr}`);
        container.appendChild(grid);
    }
}

function clearGrid() {
    container.innerHTML = " "
}

//add hover effect by adding a class
container.addEventListener("mouseover", (event) => {
    const hoverBox = container.querySelector(`#${event.target.id}`)
    hoverBox.classList.add("hoverGrid")
})
