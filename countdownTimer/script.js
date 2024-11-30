const inputDate = document.querySelector('input[type="date"]');
const searchButton = document.querySelector("button");
const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");

let countdownInterval;

searchButton.addEventListener("click", () => {
  clearInterval(countdownInterval); // Clear any existing countdown

  const targetDate = new Date(inputDate.value);
  const currentDate = new Date();

  // Check if the selected date is in the past
  if (targetDate <= currentDate) {
    alert("Please select a future date.");
    return;
  }

  startCountdown(targetDate);
});

function startCountdown(targetDate) {
  countdownInterval = setInterval(() => {
    const currentDate = new Date();
    const timeDifference = targetDate.getTime() - currentDate.getTime();

    // Calculate time components
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    // Update the timer display
    daysElement.textContent = padTo2Digits(days);
    hoursElement.textContent = padTo2Digits(hours);
    minutesElement.textContent = padTo2Digits(minutes);
    secondsElement.textContent = padTo2Digits(seconds);

    // Stop the countdown when it reaches zero
    if (timeDifference < 0) {
      clearInterval(countdownInterval);
      daysElement.textContent = "00";
      hoursElement.textContent = "00";
      minutesElement.textContent = "00";
      secondsElement.textContent = "00";
      alert("Countdown finished!");
    }
  }, 1000);
}

function padTo2Digits(num) {
  return num.toString().padStart(2, "0");
}
