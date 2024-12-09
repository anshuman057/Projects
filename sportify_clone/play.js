const playButtons = document.querySelectorAll(".play-button");
const panel = document.querySelector("#panel");
const playPauseButton = document.querySelector("#play-pause-button");
const stopButton = document.querySelector("#stop-button");

playButtons.forEach((button) => {
  button.addEventListener("click", () => {
    console.log("Button clicked!");
    panel.style.display = "block";
  });
});
