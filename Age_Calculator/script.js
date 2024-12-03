document.getElementById("calculate-age").addEventListener("click", function () {
  const dobInput = document.getElementById("dob-input").value;

  if (!dobInput) {
    document.getElementById("age-output").textContent =
      "Please enter your date of birth.";

    return;
  }

  const dob = new Date(dobInput);

  const today = new Date();

  let age = today.getFullYear() - dob.getFullYear();

  const monthDifference = today.getMonth() - dob.getMonth();

  // Adjust age if the birthday hasn't occurred yet this year

  if (
    monthDifference < 0 ||
    (monthDifference === 0 && today.getDate() < dob.getDate())
  ) {
    age--;
  }

  document.getElementById("age-output").textContent = `My age is ${age} years.`;
});
