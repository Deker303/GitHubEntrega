let count = 0;

const counterElement = document.getElementById('counter');
const incrementButton = document.getElementById('increment');
const resetButton = document.getElementById('reset');

incrementButton.addEventListener('click', () => {
    count++;
    counterElement.textContent = count;
});

resetButton.addEventListener('click', () => {
    count = 0;
    counterElement.textContent = count;
});
