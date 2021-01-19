// imports
import books from "./books.js";

// load varibales
const shelf = document.querySelector(".shelf-container");
const btnSpace = document.querySelector(".btn-container")

// setup UI
window.addEventListener("DOMContentLoaded", () => {
    displayBookShelf(books);
    displayFilterBtns();
});

function displayFilterBtns() {
    const genres = books.reduce((tags, book) => {
        if(!tags.includes(book.genre)) {
            tags.push(book.genre)
        } 
        return tags
    }, ["all"]);
    btnSpace.innerHTML = genres.map(genre => `<button class="filter-btn" type="button" data-genre="${genre}">${genre}</button>`).join("");
    const filterBtns = btnSpace.querySelectorAll(".filter-btn");
    filterBtns.forEach(filterBtn => {
        filterBtn.addEventListener("click", (e) => {
            const genre = e.target.dataset.genre;
            const filteredBooks = books.filter(book => book.genre === genre);
            if(genre === "all") {
                displayBookShelf(books);
            } else {
                displayBookShelf(filteredBooks);
            }
        })
    })
}

function displayBookShelf(items) {
    shelf.innerHTML = items.map(item => 
        `<li class="book">
            <img src="${item.img}" alt="${item.title}" />
            <div class="book-info">
                <h4>${item.title}</h4>
                <p class="book-author">${item.author}</p>
                <p class="book-genre">${item.genre}</p>
            </div>
        </li>`
    ).join("");
}