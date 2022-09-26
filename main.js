const container = document.querySelector('.container');

const navbar = document.querySelector('.navbar');

const color = document.querySelector('.color');
let currentColor;
color.addEventListener("input", () => {
    currentColor = color.value;
});

const colorMode = document.querySelector('.color-mode');
const eraser = document.querySelector('.eraser');
const clear = document.querySelector('.clear');

const gridContainer = document.querySelector('.grid-container');
const grid = document.querySelector('.grid');

const range = document.querySelector('.range');
let rangeValue = range.value;
console.log(rangeValue);


// Slider to select grid size
let currentRange = 16;
let rows = currentRange;
let columns = currentRange;
createGrid(rows, columns);

range.addEventListener('input', (e) => {
    currentRange = parseInt(range.value);
    createGrid(rows, columns);
    console.log(currentRange);
});

const rangeOutput = document.querySelector('.range-output');
rangeOutput.textContent = range.value + ' x ' + range.value;


range.oninput = function showSize() {
    rows = this.value; 
    columns = this.value;
    rangeOutput.innerHTML = this.value + ' x ' + this.value;
}

console.log(rows, columns);

// Setting initial 16 x 16 grid

function createGrid(rows, columns) {
    grid.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
    grid.style.gridTemplateRows =  `repeat(${rows}, 1fr)`;
    
    for (cellIndex = 0; cellIndex < (rows * columns); cellIndex++) {
        cell = document.createElement('div');
        cell.className = cellIndex;
        cell.style.backgroundColor = 'white';
        grid.appendChild(cell)
        cell.addEventListener('mouseover', colorCell);
    }
} 

function colorCell(event, cellIndex, color) {
    document.querySelector(cellIndex);
    event.target.style.backgroundColor = 'black';
    event.target.style.backgroundColor = currentColor;
}
