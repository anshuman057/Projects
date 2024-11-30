function generatePassword() {
  const form = document.getElementById("myForm");
  const selectedOptions = [];

  // Get all checkbox inputs
  const checkboxes = form.querySelectorAll('input[type="checkbox"]');

  // Iterate through checkboxes and add selected options to the array
  checkboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      selectedOptions.push(checkbox.value);
    }
  });

  const passwordLength = parseInt(
    form.querySelector('input[type="number"]').value
  );

  if (selectedOptions.length === 0) {
    alert("Please select at least one option.");
    return;
  }

  const characterSets = {
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    numbers: "0123456789",
    symbols: "!@#$%^&*()_+-=[]{}|;:'\",./<>?",
  };

  let password = "";
  for (let i = 0; i < passwordLength; i++) {
    const randomIndex = Math.floor(Math.random() * selectedOptions.length);
    const selectedOption = selectedOptions[randomIndex];
    const characterSet = characterSets[selectedOption];
    const randomCharIndex = Math.floor(Math.random() * characterSet.length);
    password += characterSet[randomCharIndex];
  }

  // Display the generated password
  const lastH1 = document.querySelector("h1:last-of-type");
  lastH1.textContent = password;
  console.log(password);
  // You can also display the password in an HTML element or return it as a function result.
}
