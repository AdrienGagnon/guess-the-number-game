'use strict';

/* // le . pour referer a une classe
// .textContent pour voir ce qui est affiche dans le web
console.log(document.querySelector('.message').textContent);
// set the content
document.querySelector('.message').textContent = 'Correct Number! ✔';

//ecrire 13 au milieu et 10 dans le score
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

// ecrire 23 dans la boite
document.querySelector('.guess').value = 23;
 */

//defining the number
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

//creer une fonction pour eviter repetition
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

//event listener and event handler
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // When no input
  if (!guess) {
    displayMessage('No number!');
    // When win
  } else if (guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;
    displayMessage('Correct Number! ✔');
    //changer couleur du background
    document.querySelector('body').style.backgroundColor = '#60b347';
    //agrandir la boite de victoire
    document.querySelector('.number').style.width = '30rem';
    //check highscore
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    //When too high
    //   } else if (guess > secretNumber) {
    //     if (score > 1) {
    //       displayMessage('Too high!';
    //       score--;
    //       document.querySelector('.score').textContent = score;
    //     } else {
    //       displayMessage('You lost the game!';
    //       document.querySelector('.score').textContent = 0;
    //     }
    //When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  displayMessage('Start guessing...');
  document.querySelector('.guess').value = '';
});
