async function getWeather() {
  const city = document.getElementById("city").value;
  const apiKey = "84614531966e1214c656527bd7dd5cf3";
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
  );
  const data = await response.json();
  document.getElementById("city-name").textContent = data.name;
  document.getElementById("temperature").textContent =
    Math.round(data.main.temp - 273.15) + "°C";
  document.getElementById("description").textContent = data.weather[0].main;
  document.getElementById("humidity").textContent = data.main.humidity + "%";
  document.getElementById("wind-speed").textContent = data.wind.speed + " m/s";
  document.getElementById(
    "weather-icon"
  ).innerHTML = `<img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png" alt="${data.weather[0].main}">`;
  document.getElementById("weather-icon").style.display = "flex"; // Show the icon
  document.getElementById("temperature").style.display = "block"; // Show temperature
  document.getElementById("description").style.display = "block"; // Show description
  document.getElementById("humidity").style.display = "block"; // Show humidity
  document.getElementById("wind-speed").style.display = "block"; // Show wind speed
}
