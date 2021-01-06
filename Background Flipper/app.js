// variables
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
const btn = document.querySelector(".flip-btn");
const text = document.querySelector(".color");

// click btn to flip colors
btn.addEventListener("click", () => {
    let hexColor = "#";
    for(let i = 0; i < 6; i++) {
        hexColor += hex[randomHexNumber()]
    }
    document.body.style.background = hexColor;
    text.textContent = hexColor;
    text.style.color = hexColor;
})

// get random number out of hex array
function randomHexNumber() {
    return Math.floor(Math.random()*hex.length);
}