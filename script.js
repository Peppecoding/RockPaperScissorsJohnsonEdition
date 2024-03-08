let userWins = 0;
let userLoses = 0;
let userDraws = 0;

const gameOptions = ["rock", "paper", "scissors"]; 


const playGame = (userChoice) => {
  const computerChoice = gameOptions[Math.floor(Math.random() * gameOptions.length)];

  document.getElementById('userChoice').innerText = userChoice;
  document.getElementById('computerChoice').innerText = computerChoice;

  const result = determineWinner(userChoice, computerChoice);

  document.getElementById('wins').innerText = userWins;
  document.getElementById('loses').innerText = userLoses;
  document.getElementById('draws').innerText = userDraws;
  document.getElementById("resultMessage").innerText = result;
};

const determineWinner = (user, computer) => {
  if (user === computer) {
    userDraws ++;
    return "It's a draw";
  } else if (
    (user === 'rock' && computer === 'scissors') ||
    (user === 'paper' && computer === 'rock') ||
    (user === 'scissors' && computer === 'paper')
  ) {
    userWins ++;
    return "You Win!";
  } else {
    userLoses ++;
    return "You Lose!";
  }
};

