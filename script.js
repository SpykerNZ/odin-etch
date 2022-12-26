
function onEnter(e) {
    e.target.style.backgroundColor = 'red';
}

function onExit(e) {
    e.target.style.backgroundColor = selectedColor;
}

function changeColor(e) {
    selectedColor = e.target.value;
}

function changeGridSize() {
    let value = prompt("Please enter desired size of grid:");
    if (value !== parseInt(value, 10).toString()) {
        alert("Please enter only a number!");
        return;
    }

    if (value<1 || value > 100) {
        alert("Please enter a number between 1 and 100");
        return;
    }
    deleteGrid();
    generateGrid(value, value);
}

function deleteGrid() {
    const tableDiv = document.querySelector('.table');
    tableDiv.remove();
}

function clearGrid() {
    const elements = document.querySelectorAll('.element');
    elements.forEach( element => {
        element.style.backgroundColor = 'lightblue';
    })
}

function generateGrid(rowSize, columnSize) {
    const numberOfRows = rowSize;
    const numberOfColumns = columnSize;

    const tableDiv = document.createElement("div");

    tableDiv.className = 'table';

    for (let i=0; i<numberOfColumns*numberOfRows; i++)
    {
        const elemDiv = document.createElement("div");
        elemDiv.classList.add('element');
        elemDiv.dataset.index = `${i}`;
        elemDiv.addEventListener('mouseenter', onEnter);
        elemDiv.addEventListener('mouseleave', onExit);
        tableDiv.appendChild(elemDiv);
    }
    document.documentElement.style.setProperty('--numCols', numberOfColumns);
    document.documentElement.style.setProperty('--numRows', numberOfRows);
    document.body.appendChild(tableDiv);
}

const changeGridSizeButton = document.querySelector(".sizeButton");
const clearGridButton = document.querySelector(".clearButton");
const changeColorInput = document.querySelector(".colorInput");

let selectedColor = changeColorInput.value;

changeGridSizeButton.addEventListener('click', changeGridSize);
clearGridButton.addEventListener('click', clearGrid);
changeColorInput.addEventListener('input', changeColor);

generateGrid(16,16);