'use strict';
const gameSummary = {
  numbers: 0,
  wins: 0,
  losses: 0,
  ties: 0,
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

function playGame() {
  if (!game.playerMove) {
    console.log('Choose your move!');
  }

  game.aiMove = computerMove();
  const gameResult = checkResult(game.playerMove, game.aiMove);
}

playerMoves.forEach((move) => move.addEventListener('click', playerMove));
startButton.addEventListener('click', playGame);
