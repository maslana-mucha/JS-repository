'use strict';
const gameSummary = {
  numbers: 0,
  wins: 0,
  losses: 0,
  draws: 0,
};

const game = {
  playerMove: '',
  aiMove: '',
};

const playerMoves = [...document.querySelectorAll('.select img')];
const startButton = document.querySelector('.start');

//player selection
function playerMove() {
  game.playerMove = this.dataset.option;
  // console.log(game.playerMove);
  playerMoves.forEach((move) => (move.style.boxShadow = ''));
  this.style.boxShadow = '0 0 0 4px yellowgreen';
}

//computer selection
function computerMove() {
  const aiMove =
    playerMoves[Math.floor(Math.random() * playerMoves.length)].dataset.option;
  console.log(aiMove);
  return aiMove;
}

//results and its presentage
function checkResult(player, ai) {
  if (player == ai) {
    return 'draw';
  } else if (
    (player == 'paper' && ai == 'rock') ||
    (player == 'rock' && ai == 'scissors') ||
    (player == 'scissors' && ai == 'paper')
  ) {
    return 'win';
  } else {
    return 'loss';
  }
}

//result publish
function publishResults(player, ai, result) {
  document.querySelector('[data-summary="your-move"]').textContent = player;
  document.querySelector('[data-summary="ai-move"]').textContent = ai;

  document.querySelector('p.numbers span').textContent = ++gameSummary.numbers;

  if (result === 'win') {
    document.querySelector('p.wins span').textContent = ++gameSummary.wins;
    document.querySelector('[data-summary="who-win"]').textContent = 'You!';
    document.querySelector('[data-summary="who-win"]').style.color =
      'yellowgreen';
  } else if (result === 'loss') {
    document.querySelector('p.losses span').textContent = ++gameSummary.losses;
    document.querySelector('[data-summary="who-win"]').textContent =
      'Not you :(';
    document.querySelector('[data-summary="who-win"]').style.color = 'red';
  } else {
    document.querySelector('p.draws span').textContent = ++gameSummary.draws;
    document.querySelector('[data-summary="who-win"]').textContent = 'Draw!';
    document.querySelector('[data-summary="who-win"]').style.color = 'orange';
  }
}

function playGame() {
  if (!game.playerMove) {
    console.log('Choose your move!');
  }

  game.aiMove = computerMove();
  const gameResult = checkResult(game.playerMove, game.aiMove);
  publishResults(game.playerMove, game.aiMove, gameResult);
}

playerMoves.forEach((move) => move.addEventListener('click', playerMove));
startButton.addEventListener('click', playGame);
