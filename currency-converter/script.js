const currencyConverter = async (fromCurrency, toCurrency) => {
  const apiKey = "efe0fb8628ee4685c77e1ec8";
  const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${fromCurrency}`;

  const response = await fetch(url);
  const data = await response.json();
  return data.conversion_rates[toCurrency];
};

document
  .getElementById("currency-value")
  .addEventListener("keypress", async (event) => {
    if (event.key === "Enter") {
      const currencyValue = document.getElementById("currency-value").value;
      const selectedCurrency =
        document.querySelector(".currency:checked").value;
      const newCurrency = document.querySelector(".newcur:checked").value;

      try {
        const currencyStr = newCurrency === "USD" ? "$" : "₹";
        const conversionRate = await currencyConverter(
          selectedCurrency,
          newCurrency
        );
        const answer = parseFloat(currencyValue) * conversionRate;
        document.getElementById(
          "answer"
        ).textContent = `${currencyStr}${answer.toFixed(2)}`;
      } catch (error) {
        console.error("Error fetching conversion rate:", error);
        // Handle errors appropriately, e.g., display an error message to the user
      }
    }
  });
