let counter = 0;
const counterElement = document.getElementById('counter');
const incrementButton = document.getElementById('increment');
const decrementButton = document.getElementById('decrement');
const resetButton = document.getElementById('reset');

function updateCounter() {
    counterElement.innerText = counter;

    if (counter < 0) {
        counterElement.style.backgroundColor = 'red';
    } else if (counter > 0) {
        counterElement.style.backgroundColor = 'lightgreen';
    } else {
        counterElement.style.backgroundColor = 'white';
    }
}

incrementButton.addEventListener('click', () => {
    counter++;
    updateCounter();
});

decrementButton.addEventListener('click', () => {
    counter--;
    updateCounter();
});

resetButton.addEventListener('click', () => {
    counter = 0;
    updateCounter();
});

updateCounter();
