'use strict';

// document.querySelector('.number').textContent = 10;
/*
document.querySelector('.uzbekcha').addEventListener('click', function () {
  document.querySelector('.again').textContent = 'Qayta!';
  document.querySelector('.between').textContent = '(1 < son < 20)';
  document.querySelector('h1').textContent = "O'ylangan sonni top!";
  document.querySelector('.message').textContent = 'Qani kettik...';
  document.querySelector('.check').textContent = 'Tekshir!';
  document.querySelector('.label-score').innerHTML =
    '💯 Ball: <span class="score"></span>20</span>';
  document.querySelector('.label-highscore').innerHTML =
    '🥇 Natija: <span class="highscore">0</span>';
});

document.querySelector('.english').addEventListener('click', function () {
  document.querySelector('.again').textContent = 'Again!';
  document.querySelector('.between').textContent = '(Between 1 and 20)';
  document.querySelector('h1').textContent = 'Guess My Number!'; //Highscore
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.check').textContent = 'Check!';
  document.querySelector('.label-score').innerHTML =
    '💯 Score: <span class="score"></span>20</span>';
  document.querySelector('.label-highscore').innerHTML =
    '🥇 Highscore: <span class="highscore">0</span>';
});
*/
let compyuterNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
let language = 'en';
let EngUzb = {
  '❌ No Number!': '❌ Raqam kiritilmadi!',
  '📉 Too high!': '📉 Katta son!',
  '📈 Too low!': '📈 Kichik son!',
  '✅ Correct Number! 🎉': " ✅ To'g'ri raqam! 🎉",
  '😔 You lost the game': '😔 Afsuski yutqazdiz',
  'Start guessing...': 'Qani ketdik...',
};

let guessNumber = Number(document.querySelector('.guess').value);
function showMessage(message) {
  document.querySelector('.message').textContent = message;
  if (language == 'uz') {
    document.querySelector('.message').textContent = EngUzb[message];
  } else {
    document.querySelector('.message').textContent = message;
  }
}

const NUMBER = document.querySelector('.number');

document.querySelector('.check').addEventListener('click', () => {
  let guessNumber = Number(document.querySelector('.guess').value);
  function showMessage(message) {
    document.querySelector('.message').textContent = message;
    if (language == 'uz') {
      document.querySelector('.message').textContent = EngUzb[message];
    } else {
      document.querySelector('.message').textContent = message;
    }
  }

  if (score > 1) {
    if (!guessNumber) {
      showMessage('❌ No Number!');
    } else if (guessNumber !== compyuterNumber) {
      showMessage(
        guessNumber > compyuterNumber ? '📉 Too high!' : '📈 Too low!'
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      showMessage('✅ Correct Number! 🎉');
      NUMBER.textContent = compyuterNumber;
      document.querySelector('body').style.backgroundColor = '#60b347';
      NUMBER.style.width = '25rem';

      highscore = score > highscore ? score : highscore;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else {
    showMessage('😔 You lost the game!');
    document.querySelector('.score').textContent = 0;
  }
});

document.querySelector('.again').addEventListener('click', () => {
  compyuterNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.guess').value = '';
  showMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  NUMBER.textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';

  NUMBER.style.width = '15rem';
});

document.querySelector('.uzbekcha').addEventListener('click', () => {
  language = 'uz';
  document.querySelector('.again').textContent = 'Qayta!';
  document.querySelector('.between').textContent = '(1 < son < 20)';
  document.querySelector('h1').textContent = "O'ylangan sonni top!";
  document.querySelector('.check').textContent = 'Tekshir!';
  document.querySelector('.message').textContent = 'Qani ketdik...';
  document.querySelector('.label-score').innerHTML =
    '💯 Ball:<span class="score"> 20<span>';
  document.querySelector('.label-highscore').innerHTML =
    '🥇 Natija:<span class="highscore"> 0<span>';
});
document.querySelector('.english').addEventListener('click', () => {
  language = 'en';
  document.querySelector('.again').textContent = 'Again!';
  document.querySelector('.between').textContent = '(Between 1 and 20 numbers)';
  document.querySelector('h1').textContent = 'Guess My Number!';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.label-score').innerHTML =
    '💯 Score:<span class="score"> 20<span>';
  document.querySelector('.label-highscore').innerHTML =
    '🥇 Highscore:<span class="score"> 0<span>';
  document.querySelector('.check').textContent = 'check';
});
