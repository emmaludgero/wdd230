let json =
{
    "coord": {
        "lon": 6.64,
        "lat": 49.75
    },
    "weather": [
        {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04n"
        }
    ],
    "base": "stations",
    "main": {
        "temp": 43.09,
        "feels_like": 37.56,
        "temp_min": 41.63,
        "temp_max": 44.91,
        "pressure": 1029,
        "humidity": 80,
        "sea_level": 1029,
        "grnd_level": 1011
    },
    "visibility": 10000,
    "wind": {
        "speed": 9.78,
        "deg": 313,
        "gust": 16.53
    },
    "clouds": {
        "all": 85
    },
    "dt": 1708388315,
    "sys": {
        "type": 1,
        "id": 1800,
        "country": "DE",
        "sunrise": 1708410946,
        "sunset": 1708448342
    },
    "timezone": 3600,
    "id": 6554291,
    "name": "Trier",
    "cod": 200
}

let temp = json.main.temp;
console.log(temp);

let icon = json.weather[0].icon
console.log(icon);

let description = json.weather[0].description
console.log(description);


const currentTemp = document.getElementById("current-temp");
const weatherIcon = document.getElementById("weather-icon");
const captionDesc = document.querySelector("figcaption")

function displayResults(json) {
    currentTemp.innerHTML = `${json.main.temp}°F`
    const iconsrc = `https://openweathermap.org/img/w/${json.weather[0].icon}.png`
    let description = json.weather[0].description
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', description);
    captionDesc.textContent = `${description}`
}

const url = "https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&units=imperial&appid=5a9bd3bf31db6f483c38d1f5f0309e6b"

async function apiFetch(url) {
    try {
        const response = await fetch(url);
        console.log("Try ");
        if (response.ok) {
            const data = await response.json();
            console.log("Data: ", JSON.stringify(data));
            displayResults(data);
        }
        else {
            throw Error(await response.text());
            console.log("Error");
        }
    } catch (error) {
        console.error('Error fetching data:', error);
        console.log("Error ");
    }
}

apiFetch(url);
