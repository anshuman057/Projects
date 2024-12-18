let timer = 60;
let score = 0;

const increaseScore = () => {
  score += 10;
  document.getElementById("score").innerText = score;
};
const getNewHit = () => {
  let rand = Math.floor(Math.random() * 10 + 1);
  document.getElementById("hit").innerText = rand;
};
const makeBubble = () => {
  for (let i = 1; i <= 168; i++) {
    let rand = Math.floor(Math.random() * 10 + 1);
    let bubble = document.createElement("div");
    bubble.classList.add("bubble");
    bubble.innerText = rand;
    document.getElementById("pbtm").appendChild(bubble);
  }
};

const runTimer = () => {
  let clock = setInterval(() => {
    if (timer > 0) {
      timer--;
      document.getElementById("timer").innerText = timer;
    } else {
      document.getElementById(
        "pbtm"
      ).innerHTML = `Game Over!! <br><br> Your Final Score is ${score}`;
      clearInterval(clock);
    }
  }, 1000);
};

const playGame = (e) => {
  if (e.target.innerText === document.getElementById("hit").innerText) {
    increaseScore();
    getNewHit();
  }
};

getNewHit();
makeBubble();
runTimer();

document.getElementById("pbtm").addEventListener("click", playGame);
