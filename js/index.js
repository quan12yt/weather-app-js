const APP_ID = "407c6ca22b9a5d6094efd41352470a91";
const DEFAULT_VALUE = "--";

const searchInput = document.querySelector("#search-input");
const temparature = document.querySelector(".temperature");
const cityName = document.querySelector(".city-name");
const weatherState = document.querySelector(".weather-state");
const weatherIcon = document.querySelector(".weather-icon");

const sunrise = document.querySelector(".sun-rise");
const sunset = document.querySelector(".sun-set");
const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".wind");

searchInput.addEventListener("change", (e) => {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${e.target.value}&appid=${APP_ID}&units=metric&lang=vi`
  ).then(async (res) => {
    const data = await res.json();
    cityName.innerHTML = data.name || DEFAULT_VALUE;
    temparature.innerHTML = Math.round(data.main.temp) || DEFAULT_VALUE;
    weatherState.innerHTML = data.weather[0].description || DEFAULT_VALUE;
    weatherIcon.setAttribute(
      "src",
      `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    );

    sunrise.innerHTML =
      moment.unix(data.sys.sunrise).format("H:mm") || DEFAULT_VALUE;
    sunset.innerHTML =
      moment.unix(data.sys.sunset).format("H:mm") || DEFAULT_VALUE;
    humidity.innerHTML = data.main.humidity || DEFAULT_VALUE;
    wind.innerHTML = (data.wind.speed * 3.6).toFixed(2) || DEFAULT_VALUE;
  });
});
