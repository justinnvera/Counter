// ! Elements
const counter = document.getElementById("counter");
const decrease = document.getElementById("decrease");
const reset = document.getElementById("reset");
const increase = document.getElementById("increase");

// ! Counter 
// Variables
let count = 0;

// Functions
function increaseCount() {
    count++;
    counter.textContent = count;
}
function resetCount() {
    count = 0;
    counter.textContent = count;
}
function decreaseCount() {
    count--;
    counter.textContent = count;
}

// Event Listeners
decrease.addEventListener("click", decreaseCount);
reset.addEventListener("click", resetCount);
increase.addEventListener("click", increaseCount);
