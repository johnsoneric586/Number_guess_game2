'use strict';

// ---------- Variables ----------

// ----- DOM Elements -----
const main = document.getElementById('main');
const body = document.getElementById('body');
const message = document.querySelector('.message');
const score_el = document.querySelector('.score');
const number_el = document.querySelector('.number');
const highScore_el = document.querySelector('.highscore');

// ----- Buttons -----
const btn_check = document.querySelector('.check');
const btn_play = document.querySelector('.play');

// ----- Inputs -----
const input_guess = document.querySelector('.guess');

// ----- Generic -----
let secretNumber;
let score;
let highScore = 0;

// ---------- Functions ----------

function newGame() {
  body.classList.remove('winner');
  score = 20;
  score_el.textContent = `${score}`;
  message.textContent = 'Start guessing...';
  input_guess.value = '';
  number_el.textContent = '?';

  generateSecretNumber();
}

// generate a random integer between 1 and 20
function generateSecretNumber() {
  secretNumber = Math.trunc(Math.random() * 20 + 1);
}

// MAIN GAME LOGIC
function checkPlayerGuess() {
  if (Number(input_guess.value) === secretNumber) {
    message.textContent = 'You win!';
    body.classList.add('winner'); // add green background color
    if (score > highScore) {
      highScore = score;
      highScore_el.textContent = highScore; // update high score element
    }
    number_el.textContent = `${secretNumber}`; // reveal secret number
    return;
  }

  if (score <= 1) {
    score = 0;
    score_el.textContent = `${score}`;
    message.textContent = 'You lose!';
    return;
  }

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

// when clicking "play" or "again"
if (btn_play.textContent === 'Play') {
  btn_play.addEventListener('click', function () {
    btn_play.textContent = 'Again';
    main.classList.remove('hidden');

    newGame();
  });
} else if (btn_play.textContent === 'Again') {
  btn_play.addEventListener('click', function () {
    newGame();
  });
}

// when clicking "check"
btn_check.addEventListener('click', checkPlayerGuess);
