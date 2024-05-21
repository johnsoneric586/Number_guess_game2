'use strict';

// ---------- Variables ----------

// ----- DOM Elements -----
const main = document.getElementById('main');
const message = document.querySelector('.message');
const score_el = document.querySelector('.score');
const number_el = document.querySelector('.number');

// ----- Buttons -----
const btn_check = document.querySelector('.check');
const btn_play = document.querySelector('.play');

// ----- Inputs -----
const input_guess = document.querySelector('.guess');

// ----- Generic -----
let secretNumber;
let score;

// ---------- Functions ----------

function newGame() {
  score = 20;
  score_el.textContent = `${score}`;

  generateSecretNumber();
}

// Generate a random integer between 1 and 20
function generateSecretNumber() {
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  number_el.textContent = `${secretNumber}`;
}

// MAIN GAME LOGIC
function checkPlayerGuess() {
  if (input_guess.value === '') {
    message.textContent = 'You must enter a number to guess!';
  } else if (input_guess.value > 20 || input_guess.value < 0) {
    message.textContent = 'You must enter a number between 1 and 20!';
  } else if (input_guess.value > secretNumber) {
    score--;
    score_el.textContent = `${score}`;
    message.textContent = 'Too high!';
  } else if (input_guess.value < secretNumber) {
    score--;
    score_el.textContent = `${score}`;
    message.textContent = 'Too low!';
  }
}

// ---------- Event handlers ----------

// When "play" is first clicked, we want to:
// 1. change the button text to "again"
// 2. remove the hidden class from the "main" element
// 3. start a new game
if ((btn_play.textContent = 'Play')) {
  btn_play.addEventListener('click', function () {
    btn_play.textContent = 'Again';
    main.classList.remove('hidden');

    newGame();
  });
}

// When clicking "check"
btn_check.addEventListener('click', checkPlayerGuess);
