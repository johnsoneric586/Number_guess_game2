'use strict';
// WITH THIS VERSION, I'M PRACTICING CREATING FUNCTIONS FOR REPEATED CODE

// -----Here's all the functions-----

// Generate secret number function and initial call
let secretNumber;
const generateSecretNumber = function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  return secretNumber;
};
generateSecretNumber();

// Change message text | Function
const changeMessageText = function (str) {
  document.querySelector('.message').textContent = str;
};

// Change the .score text | Function
const changeScoreDisplay = function (str) {
  document.querySelector('.score').textContent = str;
};

const changeNumberElement = function (property, value) {
  document.querySelector('.number')[property] = value; // Square brackets allow expressions for "property" when calling
};

let score = 20; // Assign starting score

let highScore = 0; // Assign starting high score

// When the "check" button is clicked
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value); // Convert input to a number (defaults to string)

  //   When the "guess" field is left blank
  if (!guess) {
    changeMessageText('🛑 No number!');
    // When player wins
  } else if (guess === secretNumber) {
    if (score > highScore) highScore = score; // If player wins, check if score is greater than current high score
    document.querySelector('.highscore').textContent = highScore; // Add high score to screen
    changeMessageText('🎉 Correct Number!'); // Display "correct number!"
    document.querySelector('body').style.backgroundColor = '#60b347'; // Change background color to green
    changeNumberElement(style, 'width: 30rem'); // Width of secretNumber field gets wider
    changeNumberElement(textContent, secretNumber); // Show secret number
  }
  // When guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      changeMessageText(
        guess > secretNumber
          ? '📈 Too high!' // when guess is too high
          : '📉 Too low!' // when guess is too low
      );
    }
    // When you guess wrong and your score is 1 (when you lose)
    else {
      changeMessageText('😭 You lost the game!'); // Tell player they lose
      changeScoreDisplay(0); // Display score of 0
    }
    score--;
    changeScoreDisplay(score);
  }
});

// ------Play again button functionality----------
document.querySelector('.again').addEventListener('click', function () {
  generateSecretNumber(); // Generates new secret number
  score = 20; // Resets score to 20
  changeScoreDisplay(score); // Displays new starting score
  changeMessageText('Start guessing...'); // Reset the .message element
  document.querySelector('.guess').value = ''; //   Reset the input ".guess" field to be blank
  document.querySelector('body').style.backgroundColor = '#222'; // Reset the background color (in case player wins)
  changeNumberElement(textContent, '?'); // Reset the ".number" field to question mark if player wins
  changeNumberElement(style, 'width: 15rem'); // Reset the width of ".number" field
});
