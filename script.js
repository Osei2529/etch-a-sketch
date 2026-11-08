const container = document.querySelector("#container");
const btn = document.querySelector("button");

function createGrid(size) {
    container.textContent = "";
    const cellSize = 960/size;
    for(let i = 0; i< (size * size); i++) {
        
        const cell = document.createElement("div"); 

        cell.addEventListener("mouseover", () => {
            const r = Math.floor(Math.random()*256);
            const g = Math.floor(Math.random()*256);
            const b = Math.floor(Math.random()*256);
            cell.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        });
        
        container.appendChild(cell);
        cell.classList.add("square");

        cell.style.width = cell.style.height = `${cellSize}px`;
    }
}

btn.addEventListener("click", () => {
    const input = prompt("Please enter your square per side value:", "");
    if (input === null) return;

    const userNumber = Number(input);
    if (!Number.isInteger(userNumber) || userNumber < 1 || userNumber > 100) {
        alert("Enter a whole number between 1 and 100");
        return;
    }
    createGrid(userNumber);
});

createGrid(16);

