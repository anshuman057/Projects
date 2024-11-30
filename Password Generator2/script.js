document.getElementById("generate").addEventListener("click", function () {
  const length = parseInt(document.getElementById("length").value);
  const includeNumbers = document.getElementById("includeNumbers").checked;
  const includeSymbols = document.getElementById("includeSymbols").checked;
  const includeLowercase = document.getElementById("includeLowercase").checked;
  const includeUppercase = document.getElementById("includeUppercase").checked;

  const numbers = "0123456789";
  const symbols = "!@#$%^&*()_+-=[]{}|;:,.<>?";
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  let characterSet = "";
  if (includeNumbers) characterSet += numbers;
  if (includeSymbols) characterSet += symbols;
  if (includeLowercase) characterSet += lowercase;
  if (includeUppercase) characterSet += uppercase;

  if (characterSet.length === 0) {
    alert("Please select at least one character type.");
    return;
  }

  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characterSet.length);
    password += characterSet[randomIndex];
  }

  document.getElementById("password").value = password;
});

const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  document.body.classList.toggle("light-theme");
});
