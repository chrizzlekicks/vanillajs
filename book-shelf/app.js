import { books, displayBookShelf } from "./books.js";
const btnSpace = document.querySelector(".btn-container");
const searchBar = document.querySelector(".search-bar");

const inputLength = (item) => {
    return item.value.length;
}

const searchBook = (item) => {
    let search = item.value.toLowerCase();
    const findBook = books.filter(book => {
        if(book.title.includes(search) || book.author.includes(search)) {
            return book
        }
    });
    displayBookShelf(findBook);
}

const displaySearchBar = () => {
    searchBar.innerHTML = `<input type="text" class="form" id="userinput" placeholder="Nach Titel oder Autor suchen">`;
    let input = searchBar.querySelector("#userinput");
    input.addEventListener("input", () => {
        if(inputLength(input) > 0) {
            searchBook(input);
        } else {
            displayBookShelf(books);
        }
    })
}

const displayFilterBtns = () => {
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

const setupUI = () => {
    displayBookShelf(books);
    displaySearchBar();
    displayFilterBtns();
}

window.addEventListener("DOMContentLoaded", setupUI);