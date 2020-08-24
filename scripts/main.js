function createGrid(size) {
    for(let i = 0; i < size*size; i++){
        const div = document.createElement('div');
        div.classList.add('grid-item');
        container.appendChild(div);
    }

    container.setAttribute('style', `grid-template-rows: repeat(${size}, auto); grid-template-columns: repeat(${size}, auto);`)
}

function clearGrid() {
    const grid = Array.from(document.querySelectorAll('.grid-item'));
    grid.forEach((gridItem) => {
        gridItem.removeAttribute('style', 'background-color: black');
    });
}

function colorGrid() {
    const grid = Array.from(document.querySelectorAll('.grid-item'));
    grid.forEach((gridItem) => {
    gridItem.addEventListener('mouseover', () => {
        if(color == 'black'){
            gridItem.setAttribute('style', `background-color: black`);
        } else{
            let r = randomBetween(0, 255);
            let g = randomBetween(0, 255);
            let b = randomBetween(0, 255);
            console.log(r);
            gridItem.setAttribute('style', `background-color: rgb(${r}, ${g}, ${b})`);
        }
    })
})
}

function removeGrid() {
    const grid = Array.from(document.querySelectorAll('.grid-item'));
    grid.forEach((gridItem) => {
        gridItem.remove();
    });
}

function toggleBorder() {
    const grid = Array.from(document.querySelectorAll('.grid-item'));
    grid.forEach((gridItem) => {
        gridItem.classList.toggle('border');
    });
}

function randomBetween(min, max) {
    return Math.floor(Math.random()*(max-min+1));
}

let color = 'black';

const container = document.createElement('div');
container.setAttribute('id', 'container');
document.body.prepend(container);

createGrid(16);

container.addEventListener('mouseover', colorGrid);

const clear = document.querySelector('#clear');
clear.addEventListener('click', clearGrid);

const toggleButton = document.querySelector('#toggle-border');
toggleButton.addEventListener('click', toggleBorder);

const gridSize = document.querySelector('#grid-size');
gridSize.addEventListener('click', () => {
    const size = prompt('How many squares do you want per side?');
    if(size){
        removeGrid();
        createGrid(size);
    }
});

const blackFill = document.querySelector('#black');
blackFill.addEventListener('click', () => {
    color = `black`;
});

const randomFill = document.querySelector('#random');
randomFill.addEventListener('click', () => {
    color = `random`;
    console.log(color);
});