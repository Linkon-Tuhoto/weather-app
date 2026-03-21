const apiKey ="57b48da0c5640c0f3912458724a70a9b"
function getWeather(){
    const city = document.getElementById("city").value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    .then(response => response.json())
    .then(data => { document.getElementById("weather").innerHTML = `
    <h2>${data.name}</h2>
    <p>Temperature: ${data.main.temp}</p>
    <p>Condition: ${data.weather[0].description}</p>
    `;
    const icon = document.getElementById("icon");
    const condition = data.weather[0].main.toLowerCase();
    icon.className = "fa-sun";
    if(condition === "clear"){
    icon.classList.add("fa-sun");
    }
    else if(condition === "rain"){
    icon.classList.add("fa-cloud-rain");
    }
    else if(condition === "clouds"){
    icon.classList.add("fa-cloud");
    }
    else if(condition === "snow"){
    icon.classList.add("fa-snowflake");
    }
    else if(condition === "thunderstorm"){
    icon.classList.add("fa-bolt");
    }
    else{
    icon.classList.add("fa-smog");
    }
    document.getElementById("weather").innerHTML = `
    <h2>${data.name}</h2>
    <div class="allitems">

    <div class="item">
    <h3>Temp</h3>
    <i class="fas fa-temperature-high"></i>
    <span>${data.main.temp}°C</span>
    </div>

    <div class="item">
    <h3>Wind Speed</h3>
    <i class="fas fa-wind"></i>
    <span>${data.wind.speed}m/s</span>
    </div>

    <div class="item">
    <h3>Humidity</h3>
    <i class="fas fa-droplet"></i>
    <span>${data.main.humidity}%</span>
    </div>
    </div>

    <p class="yes">${data.weather[0].description}</p>
    `;
    });
};
const cities = {
    australia: ["Sydney", "Melbourne", "Brisbane"],
    brazil: ["Sao Paulo", "Rio de Janeiro", "Brasilia"],
    canada: ["Toronto", "Vancouver", "Montreal"],
    china: ["Beijing", "Shanghai", "Shenzhen"],
    france: ["Paris", "Lyon", "Marseille"],
    germany: ["Berlin", "Munich", "Hamburg"],
    india: ["Mumbai", "Delhi", "Bangalore"],
    japan: ["Tokyo", "Osaka", "Kyoto"],
    kenya: ["Nairobi", "Mombasa", "Kisumu", "Eldoret", "Nakuru", "Meru"],
    nigeria: ["Lagos", "Abuja", "Kano"],
    southafrica: ["Johannesburg", "Cape Town", "Durban"],
    uk: ["London", "Manchester", "Birmingham"],
    usa: ["New York", "Los Angeles", "Chicago"]
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

