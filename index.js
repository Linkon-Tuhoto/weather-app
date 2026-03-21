const apiKey =""
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
const cities = {
    kenya : ["NAIROBI", "KISUMU", "ELDORET", "NAKURU", "MOMBASA"],
    America : ["WASHINGTON DC", "NEWYORK", "CHICAGO"]
}
function updateCities(){
    const country = document.getElementById("country").value;
    const selectcity = document.getElementById("city");
    selectcity.innerHTML = '<option value="">--SELECT CITY--</option>';

    cities[country].forEach( city => {
        const option = document.createElement("option");
        option.value = city;
        option.textContent = city;
        selectcity.appendChild(option)
    });
};