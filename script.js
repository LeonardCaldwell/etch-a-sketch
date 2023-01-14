const button = document.querySelector('#popup');
button.addEventListener('click', () => {
    const gridSize = prompt("Enter the new grid size (min 1, max 100)",16);
    if (isNaN(gridSize) || gridSize > 100 || gridSize <= 0) {
        alert('Please only enter a number between 1 and 100');
    } else {
        newGrid(gridSize);
    } 
});

function newGrid(size) {
    console.log(size);
    const container = document.querySelector('#container')
    container.textContent = size
}