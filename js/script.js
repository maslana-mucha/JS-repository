const gameSummary = {
  numbers: 0,
  wins: 0,
  losses: 0,
  ties: 0,
};

const game = {
  playerMove: '',
  aiMove: '',
  playerMoveHTML: '',
};

const playerMoves = [...document.querySelectorAll('.select img')];
console.log(playerMoves);

const playerMove = () => {
  console.log('fuuu');
};

playerMoves.forEach((playerMove) =>
  playerMove.addEventListener('click', playerMove)
);
