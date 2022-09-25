const container = document.querySelector('.container');

const navbar = document.querySelector('.navbar');

const color = document.querySelector('.color');
color.addEventListener("input", () => currentColor = color.value);


const colorMode = document.querySelector('.color-mode');
const eraser = document.querySelector('.eraser');
const clear = document.querySelector('.clear');

const gridContainer = document.querySelector('.grid-container');
const grid = document.querySelector('.grid');

// Setting initial 16 x 16 grid

function createGrid(rows, columns) {
    grid.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
    grid.style.gridTemplateRows =  `repeat(${rows}, 1fr)`;
    
    for (cellIndex = 0; cellIndex < (rows * columns); cellIndex++) {
        cell = document.createElement('div');
        cell.className = cellIndex;
        cell.style.backgroundColor = 'steelblue';
        grid.appendChild(cell)
        cell.addEventListener('mouseover', colorCell);
    }
}

createGrid(16, 16);

console.log(color.value);


function colorCell(event, cellIndex, color) {
    document.querySelector(cellIndex);
    event.target.style.backgroundColor = 'black';
    event.target.style.backgroundColor = currentColor;
}