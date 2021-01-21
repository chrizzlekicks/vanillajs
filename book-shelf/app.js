// imports
import books from "./books.js";

// load varibales
const shelf = document.querySelector(".shelf-container");
const btnSpace = document.querySelector(".btn-container");
const searchBar = document.querySelector(".search-bar");

// setup UI
window.addEventListener("DOMContentLoaded", () => {
    displayBookShelf(books);
    displayFilterBtns();
    displaySearchBar();
});

function displaySearchBar() {
    searchBar.innerHTML = `<input type="text" class="form" id="userinput" placeholder="Bitte Buchtitel exakt eingeben"><button class="search-btn">suche</button>`;
    const searchBtn = searchBar.querySelector(".search-btn");
    let input = searchBar.querySelector("#userinput");
    searchBtn.addEventListener("click", () => {
        if(inputLength(input) > 0) {
            searchBook(input);
        }
    });
    input.addEventListener("keypress", (e) => {
        if(inputLength(input) > 0 && e.which == 13) {
            searchBook(input);
        }
    });
}

function displayFilterBtns() {
    const genres = books.reduce((tags, book) => {
        if(!tags.includes(book.genre)) {
            tags.push(book.genre)
        } 
        return tags
    }, ["alle"]);
    btnSpace.innerHTML = genres.map(genre => `<button class="filter-btn" type="button" data-genre="${genre}">${genre}</button>`).join("");
    const filterBtns = btnSpace.querySelectorAll(".filter-btn");
    filterBtns.forEach(filterBtn => {
        filterBtn.addEventListener("click", (e) => {
            const genre = e.target.dataset.genre;
            const filteredBooks = books.filter(book => book.genre === genre);
            if(genre === "alle") {
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

function searchBook(item) {
    let search = item.value;
    const findBook = books.find(book => book.title.toLowerCase().includes(search.toLowerCase()));
    const foundBook = new Array(findBook);
    displayBookShelf(foundBook);
}

function inputLength(item) {
    return item.value.length;
}