const apiKey ="4ab6eca84276593609318b4851f4eca2"
function getWeather(){
    const city = document.getElementById("city").value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    .then(response => response.json())
    .then(data => { document.getElementById("weather").innerHTML = `
    <h2>${data.name}</h2>
    <p>Temperature: ${data.main.temp}</p>
    <p>Condition: ${data.weather[0].description}</p>
    `;
    });
};