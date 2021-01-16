// load variables
const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

// set counter for positioning of slides
let counter = 0;

// define starting positions of slides
slides.forEach((slide, index) => slide.style.left = `${index*100}%`);
prevBtn.style.display = "none";

// click buttons
prevBtn.addEventListener("click", () => {
    counter--;
    slideShow(slides);
});
nextBtn.addEventListener("click", () => {
    counter++;
    slideShow(slides);
});

function slideShow(items) {
    if(counter === 0) {
        prevBtn.style.display = "none";
    } else {
        prevBtn.style.display = "block";
    }
    if(counter === items.length - 1) {
        nextBtn.style.display = "none";
    } else {
        nextBtn.style.display = "block";
    }
    items.forEach(item => {
        item.style.transform = `translate(-${counter*100}%)`
    })
}