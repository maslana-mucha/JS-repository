'use strict'

function buttonClicked(buttonType) {
  clearMessages();
  console.log(buttonType + ' został kliknięty');
  
  const randomNumber = Math.floor(Math.random() * 3 + 1);
  const computerMove = getMoveName(randomNumber);

  console.log('wylosowana liczba to: ' + randomNumber);
  console.log('ruch komputera to: ' + computerMove);
  displayResult(buttonType, computerMove);
}

const buttonRock = document.getElementById('button-rock');
const buttonPaper = document.getElementById('button-paper');
const buttonScissors = document.getElementById('button-scissors');

buttonRock.addEventListener('click', function(){ buttonClicked('rock'); });
buttonPaper.addEventListener('click', function(){ buttonClicked('paper'); });
buttonScissors.addEventListener('click', function(){ buttonClicked('scissors'); })

function getMoveName(argMoveId) {
  console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);
  if (argMoveId == 1) {
    return 'rock';
  } else if (argMoveId == 2) {
    return 'paper';
  } else if (argMoveId == 3) {
    return 'scissors';
  }
}

let playerScore = 0;
let computerScore = 0;

function displayResult(argPlayerMove, argComputerMove) {
  console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
  if (argPlayerMove == 'paper' && argComputerMove == 'rock') {
    printMessage('You win!');
    playerScore++;
    printMessage(playerScore + ' - ' + computerScore)
  } else if (argPlayerMove == 'rock' && argComputerMove == 'scissors') {
    printMessage('You win!');
    playerScore++;
    printMessage(playerScore + ' - ' + computerScore)
  } else if (argPlayerMove == 'scissors' && argComputerMove == 'paper') {
    printMessage('You win!');
    playerScore++;
    printMessage(playerScore + ' - ' + computerScore)
  } else if (argPlayerMove == argComputerMove) {
    printMessage('Tie!');
    printMessage(playerScore + ' - ' + computerScore)
  } else {
    printMessage('You loose :(');
    computerScore++;
    printMessage(playerScore + ' - ' + computerScore)
  }
  printMessage('I played ' + argComputerMove + ', and you played ' + argPlayerMove);
  console.log('wynik ', playerScore, computerScore);
}
