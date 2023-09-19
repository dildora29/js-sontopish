'use strict';

// document.querySelector('.number').textContent = 10;

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
  document.querySelector('h1').textContent = 'Guess My Number!';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.check').textContent = 'Check!';
  document.querySelector('.label-score').textContent = ' 💯 Score:   20';
  document.querySelector('.label-highscore').textContent = ' 🥇 Highscore:  0';
});
