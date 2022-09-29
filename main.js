const container = document.querySelector('.container');

let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false);

const navbar = document.querySelector('.navbar');

let currentColor;
const color = document.querySelector('.color');
color.addEventListener("input", () => {
    currentColor = color.value;
});

const psychedelic = document.querySelector('.psychedelic');
psychedelic.addEventListener('click', () => {
    currentColor = randomHex();
    
});


let navButtons = document.querySelectorAll('.buttons');
let buttons = Array.from(navButtons);
selectActiveMode(this, buttons);


const eraser = document.querySelector('.eraser');
eraser.addEventListener('click', () => {
    currentColor = 'white';
});

const clear = document.querySelector('.clear');
clear.addEventListener('click', clearGrid);

const gridContainer = document.querySelector('.grid-container');
const grid = document.querySelector('.grid');

const range = document.querySelector('.range');
let rangeValue = range.value;
// Clear grid and create new one upon size adjustment
range.addEventListener('input', (e) => {
    currentRange = parseInt(range.value);
    clearGrid();
    createGrid(rows, columns);
});

let currentRange = 16;
let rows = currentRange;
let columns = currentRange;
createGrid(rows, columns);

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
        cell.setAttribute("id", cellIndex);
        cell.className = 'gridCells';
        cell.style.backgroundColor = 'white';
        grid.appendChild(cell)
        cell.addEventListener('mouseover', colorCell);
        cell.addEventListener('mousedown', colorCell);
    }
} 

function colorCell(event, cellIndex, color) {
    if (event.type === 'mouseover' && !mouseDown) return
    document.querySelector(cellIndex);
    event.target.style.backgroundColor = 'black';
    event.target.style.backgroundColor = currentColor;
    if (event.target.id !== currentColor) {
        currentColor = randomHex();
    }
}

function clearGrid(event, gridCells) {
    let elements = Array.from(document.getElementsByClassName('gridCells'));
    elements.forEach(gridCell => {
        gridCell.style.backgroundColor = 'white';
    });
} 

function removeActive(target) {
    buttons.forEach(button => {
        if (button == target) { button.classList.add('active'); }
        else { button.classList.remove('active'); }
    });
}

function selectActiveMode(event, buttons) {
    buttons.forEach.call(buttons, function(b) {
        b.addEventListener('click', function(e) { 
            buttons.forEach.call(buttons, function(b) {
                b.classList.remove('active');
                b.style.backgroundColor = 'lightgrey';
                b.style.color = 'black';
            })
        b.classList.toggle('active');
        b.style.backgroundColor = 'black';
        b.style.color = 'lightgrey';
    });
});
}

function randomInt(max) {
    return Math.floor(Math.random()*(max + 1));
}

function randomRGB() {
    let r = randomInt(255);
    let g = randomInt(255);
    let b = randomInt(255);
    return [r, g, b];
}

function randomHex() {
    let [r, g, b] = randomRGB();

    let hr = r.toString(16).padStart(2, '0');
    let hg = g.toString(16).padStart(2, '0');
    let hb = b.toString(16).padStart(2, '0');

    return '#' + hr + hg + hb;
}