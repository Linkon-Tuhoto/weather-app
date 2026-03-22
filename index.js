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
    kenya: ["Nairobi", "Mombasa", "Kisumu", "Eldoret", "Nakuru", "Meru"],
    australia: ["Sydney", "Melbourne", "Brisbane"],
    brazil: ["Sao Paulo", "Rio de Janeiro", "Brasilia"],
    canada: ["Toronto", "Vancouver", "Montreal"],
    china: ["Beijing", "Shanghai", "Shenzhen"],
    france: ["Paris", "Lyon", "Marseille"],
    germany: ["Berlin", "Munich", "Hamburg"],
    india: ["Mumbai", "Delhi", "Bangalore"],
    japan: ["Tokyo", "Osaka", "Kyoto"],
    nigeria: ["Lagos", "Abuja", "Kano"],
    southafrica: ["Johannesburg", "Cape Town", "Durban"],
    uk: ["London", "Manchester", "Birmingham"],
    usa: ["New York", "Los Angeles", "Chicago"],
    algeria: ["Algiers", "Oran", "Constantine"],
    angola: ["Luanda", "Huambo", "Lobito"],
    benin: ["Cotonou", "Porto-Novo", "Parakou"],
    botswana: ["Gaborone", "Francistown", "Maun"],
    burkinafaso: ["Ouagadougou", "Bobo-Dioulasso", "Koudougou"],
    burundi: ["Gitega", "Bujumbura", "Ngozi"],
    cameroon: ["Yaounde", "Douala", "Garoua"],
    capeverde: ["Praia", "Mindelo", "Santa Maria"],
    centralafricanrepublic: ["Bangui", "Bimbo", "Berberati"],
    chad: ["N'Djamena", "Moundou", "Sarh"],
    comoros: ["Moroni", "Mutsamudu", "Fomboni"],
    congo: ["Brazzaville", "Pointe-Noire", "Dolisie"],
    drcongo: ["Kinshasa", "Lubumbashi", "Goma"],
    djibouti: ["Djibouti", "Ali Sabieh", "Tadjoura"],
    egypt: ["Cairo", "Alexandria", "Giza"],
    equatorialguinea: ["Malabo", "Bata", "Ebebiyin"],
    eritrea: ["Asmara", "Keren", "Massawa"],
    ethiopia: ["Addis Ababa", "Dire Dawa", "Mekelle"],
    gabon: ["Libreville", "Port-Gentil", "Franceville"],
    gambia: ["Banjul", "Serekunda", "Brikama"],
    ghana: ["Accra", "Kumasi", "Tamale"],
    guinea: ["Conakry", "Kankan", "Labe"],
    guineabissau: ["Bissau", "Bafata", "Gabu"],
    ivorycoast: ["Abidjan", "Yamoussoukro", "Bouake"],
    lesotho: ["Maseru", "Teyateyaneng", "Mafeteng"],
    liberia: ["Monrovia", "Gbarnga", "Kakata"],
    libya: ["Tripoli", "Benghazi", "Misrata"],
    madagascar: ["Antananarivo", "Toamasina", "Antsirabe"],
    malawi: ["Lilongwe", "Blantyre", "Mzuzu"],
    mali: ["Bamako", "Sikasso", "Mopti"],
    mauritania: ["Nouakchott", "Nouadhibou", "Rosso"],
    mauritius: ["Port Louis", "Curepipe", "Quatre Bornes"],
    morocco: ["Casablanca", "Rabat", "Marrakesh"],
    mozambique: ["Maputo", "Beira", "Nampula"],
    namibia: ["Windhoek", "Walvis Bay", "Swakopmund"],
    niger: ["Niamey", "Zinder", "Maradi"],
    nigeria: ["Lagos", "Abuja", "Kano"],
    rwanda: ["Kigali", "Butare", "Gisenyi"],
    saotome: ["Sao Tome", "Neves", "Santana"],
    senegal: ["Dakar", "Touba", "Saint-Louis"],
    seychelles: ["Victoria", "Beau Vallon", "Anse Boileau"],
    sierraleone: ["Freetown", "Bo", "Kenema"],
    somalia: ["Mogadishu", "Hargeisa", "Kismayo"],
    southafrica: ["Johannesburg", "Cape Town", "Durban"],
    southsudan: ["Juba", "Wau", "Malakal"],
    sudan: ["Khartoum", "Omdurman", "Port Sudan"],
    swaziland: ["Mbabane", "Manzini", "Big Bend"],
    tanzania: ["Dar es Salaam", "Dodoma", "Arusha"],
    togo: ["Lome", "Sokode", "Kara"],
    tunisia: ["Tunis", "Sfax", "Sousse"],
    uganda: ["Kampala", "Gulu", "Mbarara"],
    zambia: ["Lusaka", "Kitwe", "Ndola"],
    zimbabwe: ["Harare", "Bulawayo", "Mutare"]
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

