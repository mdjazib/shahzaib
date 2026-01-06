const display = document.querySelector(".counter_display");
let counter = 0;

function add() {
    ++counter;
    display.innerText = counter;
}

function minus() {
    counter > 0 ? --counter : counter;
    display.innerText = counter;
}

function reset() {
    counter = 0;
    display.innerText = counter;
}