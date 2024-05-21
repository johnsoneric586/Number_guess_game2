'use strict';
// ----------Implementing the Game Logic----------

let secretNumber = Math.trunc(Math.random() * 20) + 1; // Generate secret number
// Math.trunc eliminates all the decimal places and just leaves the integer
// Math.random * 20 generates a random integer value between 1 and 20

let score = 20; // Assign starting score

let highScore = 0; // Assign starting high score

// When the "check" button is clicked
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value); // Convert input to a number (defaults to string)

  //   When the "guess" field is left blank
  if (!guess) {
    document.querySelector('.message').textContent = '🛑 No number!';
    // When player wins
  } else if (guess === secretNumber) {
    if (score > highScore) highScore = score; // If player wins, check if score is greater than current high score
    document.querySelector('.highscore').textContent = highScore; // Add high score to screen
    document.querySelector('.message').textContent = '🎉 Correct Number!'; // Display "correct number!"
    document.querySelector('body').style.backgroundColor = '#60b347'; // Change background color to green
    document.querySelector('.number').style.width = '30rem'; // Width of secretNumber field gets wider
    document.querySelector('.number').textContent = secretNumber; // Show secret number
  }
  // When guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      guess > secretNumber
        ? (document.querySelector('.message').textContent = '📈 Too high!') // when guess is too high
        : (document.querySelector('.message').textContent = '📉 Too low!'); // when guess is too low
    }
    // When you guess wrong and your score is 1 (when you lose)
    else {
      document.querySelector('.message').textContent = '😭 You lost the game!'; // Tell player they lose
      document.querySelector('.score').textContent = 0; // Display score of 0
    }
    score--;
    document.querySelector('.score').textContent = score;
  }
});

// ------Play again button functionality----------
document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1; // Generates new secret number
  score = 20; // Resets score to 20
  document.querySelector('.score').textContent = score; // Displays new starting score
  document.querySelector('.message').textContent = 'Start guessing...'; // Reset the .message element
  document.querySelector('.guess').value = ''; //   Reset the input ".guess" field to be blank
  document.querySelector('body').style.backgroundColor = '#222'; // Reset the background color (in case player wins)
  document.querySelector('.number').textContent = '?'; // Reset the ".number" field to question mark if player wins
  document.querySelector('.number').style.width = '15rem'; // Reset the width of ".number" field
});
