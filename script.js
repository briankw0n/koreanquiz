import { hanjaCharacters } from './characters.js';

const question = document.getElementById("question");
const answer = document.getElementById("answer");
const next = document.getElementById("next");
let card = document.getElementById("card");
let charList = hanjaCharacters;

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function initializeCard() {
  const cardFront = document.querySelector(".card-front");
  const cardBack = document.querySelector(".card-back");

  charList = shuffleArray(hanjaCharacters);
  const currentCard = charList[0];
  cardFront.textContent = currentCard.question;
  cardBack.textContent = currentCard.answer;
}
initializeCard();

function flipCard() {
  card.style.transition = "transform 0.5s";
  card.classList.toggle("flipped");
}

function nextCard() {
  card.style.transition = "transform 0s";
  card.classList.remove("flipped");
  initializeCard();
}

question.addEventListener("click", flipCard);
answer.addEventListener("click", flipCard);
next.addEventListener("click", nextCard);

document.addEventListener("DOMContentLoaded", function() {
  const autofocusButtons = document.querySelectorAll(".card-front[autofocus], .card-back[autofocus]");

  autofocusButtons.forEach(button => {
    button.blur();
  });
});
