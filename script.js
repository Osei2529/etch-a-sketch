// console.log("hello world")
const container = document.querySelector("#container");
const size = 16;
const cellSize = 960/size;

for(let i = 0; i< (size * size); i++) {
    const cell = document.createElement("div");
    cell.classList.add("square");
    container.appendChild(cell);

    cell.style.width = `${cellSize}px`;
    cell.style.height = `${cellSize}px`;
}



