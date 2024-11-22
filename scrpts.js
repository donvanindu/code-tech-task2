function getWeather() {
  const city = document.getElementById("cityInput").value;
  const apiKey = `931f131dde3f4ae2fcbc3289fc646471`;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
   fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data.weather[0].icon)
        const icon = `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`
      const weather = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Weather: ${data.weather[0].description}</p>
         <img src=${icon} />
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Wind Speed: ${data.wind.speed} m/s</p>
      `;
      document.getElementById("weatherResult").innerHTML = weather;
    })
    .catch(error => {
      document.getElementById("weatherResult").innerHTML = "Could not fetch weather data.";
    });
}