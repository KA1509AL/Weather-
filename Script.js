document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("getWeatherBtn").addEventListener("click", getWeather);
});

function getWeather() {
    const city = document.getElementById("city").value.trim();
    const apiKey = "YOUR_API_KEY";
    const weatherInfo = document.getElementById("weatherInfo");

    if (!city) {
        weatherInfo.innerHTML = "<p>Please enter a city name.</p>";
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                weatherInfo.innerHTML = `
                    <h2>${data.name}, ${data.sys.country}</h2>
                    <p>Temperature: ${data.main.temp}°C</p>
                    <p>Weather: ${data.weather[0].description}</p>
                    <p>Humidity: ${data.main.humidity}%</p>
                    <p>Wind Speed: ${data.wind.speed} m/s</p>
                `;
            } else {
                weatherInfo.innerHTML = `<p>City not found. Please try again.</p>`;
            }
        })
        .catch(error => {
            weatherInfo.innerHTML = `<p>Error fetching weather data. Please try again later.</p>`;
            console.error("Error fetching weather data:", error);
        });
}
