const buttonRock = document.getElementById('button-rock');
const buttonScissors = document.getElementById('button-scissors');
const buttonPaper = document.getElementById('button-paper');

buttonRock.addEventListener('click', function(){ buttonClicked('kamień'); });
buttonPaper.addEventListener('click', function(){ buttonClicked('papier'); });
buttonScissors.addEventListener('click', function(){ buttonClicked('nożyce'); })

function buttonClicked(buttonType) {
  clearMessages();
  console.log(buttonType + ' został kliknięty');
  var argComputerMove, argMoveId, argPlayerMove, computerMove, playerInput, playerMove, randomNumber;

  playerMove = buttonType;
  randomNumber = Math.floor(Math.random() * 3 + 1);
  console.log('wylosowana liczba to: ' + randomNumber);
  computerMove = getMoveName(randomNumber);
  console.log('ruch komputera to: ' + computerMove);
  displayResult(playerMove, computerMove);
}

function getMoveName(argMoveId) {
  console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);
  if (argMoveId == 1) {
    return 'kamień';
  } else if (argMoveId == 2) {
    return 'papier';
  } else if (argMoveId == 3) {
    return 'nożyce';
  } else {
    printMessage('Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodziło o "kamień".');
    return 'kamień';
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
