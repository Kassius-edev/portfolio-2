const searchBtn = document.querySelector(".magnifying-glass");
const divActive = document.querySelector(".search");

searchBtn.addEventListener("click", function () {
  divActive.classList.toggle("input-active");
});

// Testimonials

let testimonials = [
  {
    id: 1,
    image: "/assets/testimonial-img.png",
    quote:
      "But I must explain to you how all this mistaken idea of denouncingpleasure and praising pain was born and I will give you a complete.",
    name: "Jared Warner",
    position: "CEO of Zeo",
  },
  {
    id: 2,
    image: "/assets/testimonial-img-2.jpg",
    quote:
      "But I must explain to you how all this mistaken idea of denouncingpleasure and praising pain was born and I will give you a complete",
    name: "John Wick",
    position: "CEO of Plan",
  },
  {
    id: 3,
    image: "/assets/testimonial-img-3.jpg",
    quote:
      "But I must explain to you how all this mistaken idea of denouncingpleasure and praising pain was born and I will give you a complete",
    name: "Neo Prometheus",
    position: "CEO of Tard",
  },
];

const nextBtn = document.querySelector(".testimonial-next");
const prevBtn = document.querySelector(".testimonial-prev");
const cardImage = document.querySelector(".js-test-img");
const cardQuote = document.querySelector(".js-test-quote");
const cardName = document.querySelector(".js-test-name");
const cardTitle = document.querySelector(".js-test-title");

let currentCard = 0;

window.addEventListener("DOMContentLoaded", function () {
  loadCard();
});

nextBtn.addEventListener("click", function () {
  currentCard++;
  if (currentCard > testimonials.length - 1) {
    currentCard = 0;
  }
  loadCard();
});
prevBtn.addEventListener("click", function () {
  currentCard--;
  if (currentCard < 0) {
    currentCard = testimonials.length - 1;
  }
  loadCard();
});

function loadCard() {
  let person = testimonials[currentCard];
  cardImage.src = person.image;
  cardQuote.textContent = person.quote;
  cardName.textContent = person.name;
  cardTitle.textContent = person.position;
}

const copyright = document.querySelector(".copyright");

window.addEventListener("DOMContentLoaded", function () {
  copyright.innerHTML = `© Copy; ${new Date().getFullYear()} Sarah. All rights reserved.`;
});
