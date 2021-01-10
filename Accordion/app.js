// questions
const faqDB = [
    {
        title: "question 1",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias odit soluta temporibus quis sunt, sapiente, laudantium qui architecto ducimus, perspiciatis non? Expedita laboriosam excepturi repellendus! Omnis, architecto. Excepturi, reiciendis facere."
    },
    {
        title: "question 2",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias odit soluta temporibus quis sunt, sapiente, laudantium qui architecto ducimus, perspiciatis non? Expedita laboriosam excepturi repellendus! Omnis, architecto. Excepturi, reiciendis facere." 
    },
    {
        title: "question 3",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias odit soluta temporibus quis sunt, sapiente, laudantium qui architecto ducimus, perspiciatis non? Expedita laboriosam excepturi repellendus! Omnis, architecto. Excepturi, reiciendis facere."
    }
];

// select the necessary variable
const questionSection = document.querySelector(".questions");

// setup UI
window.addEventListener("DOMContentLoaded", () => displayQuestions(faqDB));

// display questions
function displayQuestions(questions) {
    questionSection.innerHTML = questions.map(question => 
        `<article class="question flex">
            <div class="title">
                <h3>${question.title}</h3>
            </div>
            <div class="content">
                <p>${question.content}</p>
            </div>
        </article>`
    ).join("");
    // toggle questions
    const faqs = document.querySelectorAll(".question");
    faqs.forEach(faq => {
        const toggle = faq.querySelector(".title");
        toggle.addEventListener("click", () => {
            // close all remaining questions
            faqs.forEach(question => {
                    if (question != faq) {
                        question.classList.remove("is-open");
                    }
                });
            faq.classList.toggle("is-open");
        })
    })
}