const container = document.createElement('div');
container.setAttribute('id', 'container');
document.body.appendChild(container);

for(let i = 0; i < 16*16; i++){
    const div = document.createElement('div');
    div.classList.add('grid-item');
    container.appendChild(div);
}

const grid = Array.from(document.querySelectorAll('.grid-item'));
grid.forEach((gridItem) => {
    gridItem.addEventListener('mouseover', () => {
        gridItem.classList.add('black');
    })
})