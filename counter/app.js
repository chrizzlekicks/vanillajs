// variables
const value = document.getElementById("value");
const btns = document.querySelectorAll(".btn");

// initial counter
let counter = 0;

// loop through btns and add event listener
btns.forEach(btn => btn.addEventListener("click", changeCounter))    

// function
function changeCounter(e) {
    if(e.currentTarget.classList.contains("decrease")) {
        counter--;
    } else if(e.currentTarget.classList.contains("increase")) {
        counter++;
    } else {
        counter = 0;
    }
    if(counter < 0) {
        value.style.color = "red"
    } else if(counter > 0) {
        value.style.color = "green"
    } else {
        value.style.color = "white"
    }
value.textContent = counter;
}