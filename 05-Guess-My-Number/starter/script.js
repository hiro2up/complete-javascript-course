'use strict';

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;
let gaming = true;
let myNumber = document.querySelector('.number');

// CODEBLOCK repetitive functions
const displayMessage = message => {
  document.querySelector('.message').textContent = message;
};

const displayNumber = message => {
  document.querySelector('.number').textContent = message;
};

// CODEBLOCK Check button
document.querySelector('.check').addEventListener('click', function () {
  if (gaming) {
    const guess = Number(document.querySelector('.guess').value);

    // No input
    if (!guess) {
      displayMessage('⛔️ No number!');
    }
    // When player wins
    else if (guess === secretNumber) {
      displayMessage('Correct Number 🥳');
      displayNumber(secretNumber);

      document.querySelector('body').style.backgroundColor = '#60b347';
      myNumber.style.width = '30rem';

      if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }
      gaming = false;
    }
    // Different number guess
    else if (guess !== secretNumber) {
      if (score > 1) {
        displayMessage(guess > secretNumber ? 'Too high! 📈' : 'Too low! 📉');
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        displayMessage('GAME OVER! YOU LOST! 😭');
        document.querySelector('.score').textContent = 0;
        gaming = false;
      }
    }
  } else {
    displayMessage('Game has finished! Please start a new one.');
  }
});

// CODEBLOCK Again button
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;

  displayMessage('Start guessing...');

  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';

  myNumber.style.width = '15rem';
  displayNumber('?');
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  gaming = true;
});
