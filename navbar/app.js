// select variables
const navbar = document.querySelector(".nav-container");
const menu = document.querySelector(".nav-center");
const generateText = document.querySelector(".text-generator");
const main = document.querySelector(".main");
const navToggle = document.querySelector(".icon");
let links = document.querySelectorAll(".links");
let icon = navToggle.querySelector(".material-icons");

// scroll
window.addEventListener("scroll", () => {
    if(window.scrollY > navbar.offsetTop) {
        navbar.classList.add("sticky-nav");
        navbar.style.backgroundColor = "#f5f5f5";
        links.forEach(link => link.classList.add("sticky-links"));
        icon.style.color = "#333333";
    } else {
        navbar.classList.remove("sticky-nav");
        navbar.classList.remove("show-menu");
        navbar.style.backgroundColor = "#333333";
        links.forEach(link => link.classList.remove("sticky-links"));
        icon.style.color = "#f5f5f5";
    }
});

// activate toggle
navToggle.addEventListener("click", () => {
    if(navbar.classList.contains("show-menu")) {
        navbar.classList.remove("show-menu");
        navbar.style.backgroundColor = "#333333";
        links.forEach(link => link.classList.remove("sticky-links"));
        icon.style.color = "#f5f5f5";
        if(navbar.classList.contains("sticky-nav")) {
            navbar.style.backgroundColor = "#f5f5f5";
            icon.style.color = "#333333";
        }
    } else {
        navbar.classList.add("show-menu");
        navbar.style.backgroundColor = "#f5f5f5";
        links.forEach(link => link.classList.add("sticky-links"));
        icon.style.color = "#333333";
    }
});

// click btn and generate text
generateText.addEventListener("click", () => {
    main.innerHTML = `<h2>Welcome to this cool site here!</h2>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores doloremque exercitationem sequi 
    doloribus dolorem nobis, placeat recusandae nihil quod dolorum dignissimos harum reprehenderit quas 
    earum commodi, quaerat quia numquam magni. Illum odio, laboriosam sit optio, est repellat, tempore libero 
    quod esse quasi eos! Beatae laudantium maiores ratione itaque odio. Voluptatum obcaecati aliquid, 
    voluptatem asperiores placeat sint id, quasi quo enim, quia temporibus alias adipisci aperiam assumenda 
    ea ullam totam odit debitis delectus reprehenderit amet nemo? Nulla laudantium sit ipsam, fugit, quidem 
    omnis ab numquam unde quisquam voluptates aut. A doloribus error ullam voluptates repellendus, nulla 
    aperiam odit aliquid dolores non porro in saepe itaque tempora perferendis voluptatem incidunt dolor 
    rerum totam eveniet illum vel. Suscipit error incidunt nesciunt ratione vitae? Dolores nobis ad expedita 
    suscipit laudantium cum, debitis ipsum porro reiciendis incidunt optio possimus beatae quas exercitationem 
    quia? Expedita quod repellat est culpa. Enim quod perferendis ad maxime natus ipsum assumenda impedit 
    veritatis obcaecati voluptatem sequi cupiditate unde nemo eius placeat dignissimos possimus, officiis 
    earum quos. Quo hic nemo dicta ab cum perspiciatis, esse, doloribus expedita cumque, odit vitae. 
    Repudiandae veritatis suscipit eum odit. Soluta velit itaque odio repudiandae nemo error a nobis ad, 
    dicta unde adipisci id eos. A quasi reiciendis porro aperiam odio quos accusamus nam. 
    Culpa consequuntur corrupti, tempore quaerat maxime neque deserunt quae architecto facere nobis 
    voluptatem corporis sit enim fugit, quidem sapiente doloribus fugiat ipsam vel. 
    Deleniti error repellat facere alias impedit tempore quas similique tempora excepturi veritatis distinctio 
    aspernatur commodi cum atque quo, illum minima qui quidem, obcaecati accusamus incidunt amet? 
    Eveniet quam molestiae, dolor ipsum repudiandae magni laudantium, dolores asperiores, 
    magnam assumenda minus aut doloremque non eligendi veritatis dignissimos. 
    Dolorem itaque possimus similique aliquid vero fuga dicta eveniet nemo magni tempore, 
    quisquam quos aperiam laboriosam, inventore aspernatur id suscipit aut illo tenetur 
    blanditiis distinctio! Vitae explicabo sunt ex sit eligendi vel repellendus dolorem quae a v
    oluptatibus molestiae, reiciendis nesciunt minus molestias nulla provident totam commodi 
    deserunt eius eos facere asperiores. Dolorem nesciunt fugit numquam incidunt dicta architecto ratione 
    quae natus! At officia, eaque magni consectetur iure voluptatum laudantium quas ipsum. 
    Eius amet delectus veniam atque eos vero. Eligendi quisquam eos laudantium iusto obcaecati! 
    Quis libero illum autem modi ipsam nesciunt ea saepe consequatur accusantium praesentium, 
    commodi repudiandae architecto delectus ipsum sunt voluptatem quae necessitatibus explicabo ipsa distinctio. 
    Tempora, tenetur. Molestiae, magni. Maxime maiores itaque illum aut accusamus repellendus rerum, 
    sequi quas porro? Eveniet, impedit deleniti alias illum recusandae expedita, delectus corporis eos 
    nesciunt nulla maiores debitis ea sit! Doloribus, et eligendi?
    Dolorem itaque possimus similique aliquid vero fuga dicta eveniet nemo magni tempore, 
    quisquam quos aperiam laboriosam, inventore aspernatur id suscipit aut illo tenetur 
    blanditiis distinctio! Vitae explicabo sunt ex sit eligendi vel repellendus dolorem quae a v
    oluptatibus molestiae, reiciendis nesciunt minus molestias nulla provident totam commodi 
    deserunt eius eos facere asperiores. Dolorem nesciunt fugit numquam incidunt dicta architecto ratione 
    quae natus! At officia, eaque magni consectetur iure voluptatum laudantium quas ipsum. 
    Eius amet delectus veniam atque eos vero. Eligendi quisquam eos laudantium iusto obcaecati! 
    Quis libero illum autem modi ipsam nesciunt ea saepe consequatur accusantium praesentium, 
    commodi repudiandae architecto delectus ipsum sunt voluptatem quae necessitatibus explicabo ipsa distinctio. 
    Tempora, tenetur. Molestiae, magni. Maxime maiores itaque illum aut accusamus repellendus rerum, 
    sequi quas porro? Eveniet, impedit deleniti alias illum recusandae expedita, delectus corporis eos 
    nesciunt nulla maiores debitis ea sit! Doloribus, et eligendi?
    Dolorem itaque possimus similique aliquid vero fuga dicta eveniet nemo magni tempore, 
    quisquam quos aperiam laboriosam, inventore aspernatur id suscipit aut illo tenetur 
    blanditiis distinctio! Vitae explicabo sunt ex sit eligendi vel repellendus dolorem quae a v
    oluptatibus molestiae, reiciendis nesciunt minus molestias nulla provident totam commodi 
    deserunt eius eos facere asperiores. Dolorem nesciunt fugit numquam incidunt dicta architecto ratione 
    quae natus! At officia, eaque magni consectetur iure voluptatum laudantium quas ipsum. 
    Eius amet delectus veniam atque eos vero. Eligendi quisquam eos laudantium iusto obcaecati! 
    Quis libero illum autem modi ipsam nesciunt ea saepe consequatur accusantium praesentium, 
    commodi repudiandae architecto delectus ipsum sunt voluptatem quae necessitatibus explicabo ipsa distinctio. 
    Tempora, tenetur. Molestiae, magni. Maxime maiores itaque illum aut accusamus repellendus rerum, 
    sequi quas porro? Eveniet, impedit deleniti alias illum recusandae expedita, delectus corporis eos 
    nesciunt nulla maiores debitis ea sit! Doloribus, et eligendi?
    Dolorem itaque possimus similique aliquid vero fuga dicta eveniet nemo magni tempore, 
    quisquam quos aperiam laboriosam, inventore aspernatur id suscipit aut illo tenetur 
    blanditiis distinctio! Vitae explicabo sunt ex sit eligendi vel repellendus dolorem quae a v
    oluptatibus molestiae, reiciendis nesciunt minus molestias nulla provident totam commodi 
    deserunt eius eos facere asperiores. Dolorem nesciunt fugit numquam incidunt dicta architecto ratione 
    quae natus! At officia, eaque magni consectetur iure voluptatum laudantium quas ipsum. 
    Eius amet delectus veniam atque eos vero. Eligendi quisquam eos laudantium iusto obcaecati! 
    Quis libero illum autem modi ipsam nesciunt ea saepe consequatur accusantium praesentium, 
    commodi repudiandae architecto delectus ipsum sunt voluptatem quae necessitatibus explicabo ipsa distinctio. 
    Tempora, tenetur. Molestiae, magni. Maxime maiores itaque illum aut accusamus repellendus rerum, 
    sequi quas porro? Eveniet, impedit deleniti alias illum recusandae expedita, delectus corporis eos 
    nesciunt nulla maiores debitis ea sit! Doloribus, et eligendi?
</p>`
})