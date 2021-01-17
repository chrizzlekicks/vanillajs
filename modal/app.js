// Variables
const modal = document.querySelector(".modal-wrapper");
const modalBtn = document.querySelector(".modal-btn");
const closeBtn = document.querySelector(".close-btn");

// Event Listeners
modalBtn.addEventListener("click", () => modal.classList.add("open"));
closeBtn.addEventListener("click", () => modal.classList.remove("open"));