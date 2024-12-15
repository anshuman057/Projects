const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const restButton = document.getElementById("rest");

const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

let timer;

startButton.addEventListener("click", () => {
  timer = setInterval(() => {
    if (minutes.textContent == 0 && seconds.textContent == 0) {
      clearInterval(timer);
    } else if (seconds.textContent == 0) {
      minutes.textContent--;
      seconds.textContent = 59;
    } else {
      seconds.textContent--;
    }
  }, 1000);
});

stopButton.addEventListener("click", () => {
  clearInterval(timer);
});

restButton.addEventListener("click", () => {
  minutes.textContent = 25;
  seconds.textContent = "00";
  clearInterval(timer);
});
