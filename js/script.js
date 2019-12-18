'use strict'

function buttonClicked(buttonType) {
  clearMessages();
  console.log(buttonType + ' został kliknięty');

  const computerMove = getMoveName(randomNumber);
  const randomNumber = Math.floor(Math.random() * 3 + 1);

  console.log('wylosowana liczba to: ' + randomNumber);
  console.log('ruch komputera to: ' + computerMove);
  displayResult(buttonType, computerMove);
}

const buttonRock = document.getElementById('button-rock');
const buttonPaper = document.getElementById('button-paper');
const buttonScissors = document.getElementById('button-scissors');

buttonRock.addEventListener('click', function(){ buttonClicked('kamień'); });
buttonPaper.addEventListener('click', function(){ buttonClicked('papier'); });
buttonScissors.addEventListener('click', function(){ buttonClicked('nożyce'); })

function getMoveName(argMoveId) {
  console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);
  if (argMoveId == 1) {
    return 'kamień';
  } else if (argMoveId == 2) {
    return 'papier';
  } else if (argMoveId == 3) {
    return 'nożyce';
  }
}

let playerScore = 0;
let computerScore = 0;

function displayResult(argPlayerMove, argComputerMove) {
  console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
  if (argPlayerMove == 'papier' && argComputerMove == 'kamień') {
    printMessage('Wygrywasz!');
    playerScore++;
    printMessage(playerScore + ' - ' + computerScore)
  } else if (argPlayerMove == 'kamień' && argComputerMove == 'nożyce') {
    printMessage('Wygrywasz!');
    playerScore++;
    printMessage(playerScore + ' - ' + computerScore)
  } else if (argPlayerMove == 'nożyce' && argComputerMove == 'papier') {
    printMessage('Wygrywasz!');
    playerScore++;
    printMessage(playerScore + ' - ' + computerScore)
  } else if (argPlayerMove == argComputerMove) {
    printMessage('Remis!');
    printMessage(playerScore + ' - ' + computerScore)
  } else {
    printMessage('Przegrywasz :(');
    computerScore++;
    printMessage(playerScore + ' - ' + computerScore)
  }
  printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
  console.log('wynik ', playerScore, computerScore);
}
