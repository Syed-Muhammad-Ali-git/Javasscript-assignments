// api url and api key

const apiKey = "c64e45edeb6ea28fdde710e586268fa0";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather";

//  get elements by id

const inputField = document.getElementById("inputField");
const searchBtn = document.getElementById("searchBtn");
const temperature = document.getElementById("temp");
const weather = document.getElementById("weather");
const weatherIcon = document.getElementById("weatherIcon");
const city = document.getElementById("city");
const windSpeed = document.getElementById("windSpeed");
const humidity = document.getElementById("humidity");
const visibility = document.getElementById("visibility");

// axios for data fetching

// mouse click function

searchBtn.addEventListener("click", () => {
  const cityName = inputField.value.trim();
  if (cityName) {
    getWeather(cityName);
  }
});

// enter key function
inputField.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    const cityName = inputField.value.trim();
    if (cityName) {
      getWeather(cityName);
    }
  }
});

function getWeather(cityName) {
  axios
    .get(`${apiUrl}?q=${cityName}&units=metric&appid=${apiKey}`)
    .then((res) => {
      const data = res.data;

      //   set data to DOM
      city.textContent = data.name;
      temperature.textContent = `${data.main.temp} °C`;
      weather.textContent = `${data.weather[0].description}`;
      weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
      windSpeed.textContent = data.wind.speed;
      humidity.textContent = data.main.humidity;
      visibility.textContent = data.visibility;
    })
    .catch((err) => {
      console.error("Error fetching weather:", err);
      city.textContent = "City not found ❌";
      temperature.textContent = "";
      weather.textContent = "";
      weatherIcon.src = "";
      windSpeed.textContent = "";
      humidity.textContent = "";
      visibility.textContent = "";
    });
}
