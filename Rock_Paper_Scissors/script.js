let wins = localStorage.getItem("wins")
  ? parseInt(localStorage.getItem("wins"))
  : 0;
let losses = localStorage.getItem("losses")
  ? parseInt(localStorage.getItem("losses"))
  : 0;

function play(userChoice) {
  const choices = ["rock", "paper", "scissors"];
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];

  if (userChoice === computerChoice) {
    alert(`It's a tie! Both chose ${userChoice}.`);
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    wins++;
    localStorage.setItem("wins", wins);
    alert(`You win! ${userChoice} beats ${computerChoice}.`);
  } else {
    losses++;
    localStorage.setItem("losses", losses);
    alert(`You lose! ${computerChoice} beats ${userChoice}.`);
  }

  // Update the display for wins and losses
  document.querySelector(".win").innerText = `${wins}`;
  document.querySelector(".loss").innerText = `${losses}`;
}
