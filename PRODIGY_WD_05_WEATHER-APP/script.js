const apiKey = "5c695d8b27541354de7ba27fe442e23b";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather";

const locationInput = document.getElementById("locationInput");
const searchButton = document.getElementById("searchButton");
const locationElement = document.getElementById("city");
const temperatureElement = document.getElementById("temperature");
const descriptionElement = document.getElementById("weather");
const mintempElement = document.getElementById("mintemp1");
const maxtempElement = document.getElementById("maxtemp1");

searchButton.addEventListener("click", () => {
  const location = locationInput.value;
  if (location) {
    fetchWeather(location);
  }
});

function fetchWeather(location) {
  const url = `${apiUrl}?q=${location}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      locationElement.textContent = data.name;
      temperatureElement.textContent = `${Math.round(data.main.temp)}°C`;
      descriptionElement.textContent = data.weather[0].description;
      mintempElement.textContent = `${Math.round(data.main.temp_min)}°C`;
      maxtempElement.textContent = `${Math.round(data.main.temp_max)}°C`;
      document.querySelector(".card").style.display = "flex";
    })
    .catch((error) => {
      console.error("Error fetching weather data:", error);
    });
}
