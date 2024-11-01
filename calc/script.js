const display = document.querySelector("#display");

function appendTodisplay(input) {
  display.value += input;
}

function displayClear() {
  display.value = "";
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}

function DisplayDelete() {
  display.value = display.value.substring(0, display.value.length - 1);
}
