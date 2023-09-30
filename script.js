let urlBase = "https://api.openweathermap.org/data/2.5/weather";
let apy_key = "359a80d2913f38a34641a4ee1210ab2e";
let difKelvin = 273.15;
let city = "Milan";

document.getElementById("botonBusqueda").addEventListener("click", () => {
  const city = document.getElementById("ciudadEntrada").value;

  if (city) {
    fetchDAtosClima(city);
  }
});

function fetchDAtosClima(city) {
  fetch(`${urlBase}?q=${city}&appid=${apy_key}`)
    .then((data) => data.json())
    .then((data) => mostrarDatosCLima(data));
}

function mostrarDatosCLima(data) {
  const divDataClimate = document.getElementById("datosClima");
  divDataClimate.innerHTML = " ";

  const cityName = data.name;
  const countryName = data.sys.country;
  const temperature = data.main.temp;
  const humidity = data.main.humidity;
  const description = data.weather[0].description;
  const icon = data.weather[0].icon;

  const cityTitle = document.createElement("h2");
  cityTitle.textContent = `${cityName}, ${countryName}`;

  const temperatureInfo = document.createElement("h4");
  temperatureInfo.textContent = `La temperatura es: ${Math.floor(
    temperature - difKelvin
  )}°C`;

  const humidityInfo = document.createElement("h4");
  humidityInfo.textContent = `La humedad es: ${humidity}%`;

  const iconInfo = document.createElement("img");
  iconInfo.src = `https://openweathermap.org/img/wn/${icon}@2x.png`;

  const descriptionInfo = document.createElement("p");
  descriptionInfo.textContent = `La descripción meteorológica es: ${description}`;

  divDataClimate.appendChild(cityTitle);
  divDataClimate.appendChild(temperatureInfo);
  divDataClimate.appendChild(humidityInfo);
  divDataClimate.appendChild(iconInfo);
  divDataClimate.appendChild(descriptionInfo);
}
