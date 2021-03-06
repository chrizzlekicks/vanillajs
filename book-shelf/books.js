const books = [
    {
        img: "./img/fitzek-heimweg.jpeg",
        title: "der heimweg",
        author: "sebastian fitzek",
        genre: "thriller"
    },
    {
        img: "./img/lupin_masterchief.jpeg",
        title: "arsene lupin, gentleman thief",
        author: "maurice leblanc",
        genre: "krimi"
    },
    {
        img: "./img/rowling-harry_potter_3.jpeg",
        title: "harry potter und der gefangene von azkaban",
        author: "j.k. rowling",
        genre: "kinder"
    },
    {
        img: "./img/obama-verheissenes_land.jpeg",
        title: "ein verheissenes land",
        author: "barack obama",
        genre: "biografie"
    },
    {
        img: "./img/bridgerton-duke_and_i.jpeg",
        title: "the duke and i",
        author: "julia quinn bridgerton",
        genre: "romanze"
    },
    {
        img: "./img/rossmann-oktopus.jpeg",
        title: "der neunte arm des oktopus",
        author: "dirk rossmann",
        genre: "thriller"
    },
    {
        img: "./img/strobel-die_app.jpeg",
        title: "die app",
        author: "arno strobel",
        genre: "thriller"
    },
    {
        img: "./img/seuss-grinch.jpeg",
        title: "der grinch",
        author: "dr. seuss",
        genre: "kinder"
    }
];

const shelf = document.querySelector(".shelf-container");

const displayBookShelf = (items) => {
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

export { books, displayBookShelf } 