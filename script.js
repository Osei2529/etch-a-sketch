const container = document.querySelector("#container");
const btn = document.querySelector("button");

function createGrid(size) {

    container.textContent = "";
    const cellSize = 960/size;

    for(let i = 0; i< (size * size); i++) {
        let darkness = 0;
        let r,g,b;

        const cell = document.createElement("div"); 
        cell.classList.add("square");
        cell.style.width = cell.style.height = `${cellSize}px`;

        cell.addEventListener("mouseover", () => {
            if(darkness === 0) {
                r = Math.floor(Math.random()*256);
                g = Math.floor(Math.random()*256);
                b = Math.floor(Math.random()*256);
            }
        
            if (darkness < 10) darkness++;
            const factor = 1 - darkness / 10;
            cell.style.backgroundColor = `rgb(${Math.round(r * factor)}, ${Math.round(g * factor)}, ${Math.round(b * factor)})`;
        });

        container.appendChild(cell);
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

