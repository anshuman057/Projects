let count = document.querySelector("span");

function updateStatus() {
  const currentCount = parseInt(count.innerText);
  if (currentCount > 0) {
    count.style.color = "green";
  } else if (currentCount < 0) {
    count.style.color = "red";
  } else {
    count.style.color = "black";
  }
}

function decrease() {
  count.innerText = parseInt(count.innerText) - 1;
  updateStatus();
}

function reset() {
  count.innerText = 0;
  updateStatus();
}

function increase() {
  count.innerText = parseInt(count.innerText) + 1;
  updateStatus();
}
