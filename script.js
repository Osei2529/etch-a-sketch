// console.log("hello world")
const container = document.querySelector("#container");
const size = 16;
const cellSize = 960/size;

for(let i = 0; i< (size * size); i++) {
    const cell = document.createElement("div"); 
    cell.addEventListener("mouseover", () => {
        cell.style.backgroundColor = "black";
    });
    
    container.appendChild(cell);
    cell.classList.add("square");

    cell.style.width = `${cellSize}px`;
    cell.style.height = `${cellSize}px`;
}



