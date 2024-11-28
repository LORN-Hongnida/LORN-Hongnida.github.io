document.getElementById('weatherForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const city = document.getElementById('cityInput').value;
    getWeather(city);
});

async function getWeather(city) {
    const apiKey = '113d3f9f85f1773ce4bfde15c1e869d2'; // Replace with your actual API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        // Check if the request was successful
        if (response.ok) {
            displayWeather(data);
        } else {
            console.error(`Error: ${data.message}`);
            displayError(data.message);
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
        displayError('Error fetching weather data. Please try again.');
    }
}

function displayWeather(data) {
    const weatherResult = document.getElementById('weatherResult');
    weatherResult.innerHTML = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <h4>Temperature: ${data.main.temp} &deg;C</p>
        <p>Description: ${data.weather[0].description}</p>
        <hr>
        <p style="font-size:20px"><em>Thank You! ^-^ </em></p>

    `;
}

function displayError(message) {
    const weatherResult = document.getElementById('weatherResult');
    weatherResult.innerHTML = `<p class="error">${message}</p>`;
}