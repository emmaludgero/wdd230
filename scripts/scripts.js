// Variables

let oLastModif = new Date(document.lastModified);
let actualYear = new Date().toLocaleDateString("en-US", { year: "numeric" })
let flag = '\u{1F1E7}\u{1F1F7}';

console.log(flag);

// Modifing HTML

const lastModified = document.getElementById('lastModified');
lastModified.textContent = oLastModif.toLocaleDateString("en-US", { day: "numeric", month: "numeric", year: "numeric", hour: "2-digit", minute: "2-digit" })

const year = document.getElementById("year");
year.textContent = actualYear;

document.getElementById("flag").textContent = flag;

// Hamburguer Menu
const nav = document.querySelector('.navigation');
const menuButton = document.querySelector('#menu');

menuButton.addEventListener('click', () => {
    nav.classList.toggle('show');
    menuButton.classList.toggle('show');
})

// Dark Mode

const modeButton = document.querySelector("#mode");
const main = document.querySelector("body");
const a = document.querySelectorAll('.card a');
const templeLabel = document.querySelector(".templeLabel");

modeButton.addEventListener("click", () => {
    if (modeButton.textContent.includes("🕶")) {
        main.style.background = "#222E42";
        main.style.color = "#F2F5FA";
        menuButton.style.background = "#222E42";
        menuButton.style.color = "#F2F5FA";
        templeLabel.style.color = "#222E42"
        modeButton.textContent = "☀";
        a.forEach(link => {
            link.style.color = "#F2F5FA";
        });
    } else {
        main.style.background = "#F2F5FA";
        main.style.color = "#222E42";
        modeButton.textContent = "🕶";
        menuButton.style.color = "#222E42";
        menuButton.style.background = "#F2F5FA";
        a.forEach(link => {
            link.style.color = "#222E42";
        });
    }
});

// Number of Visits Code

const visitsDisplay = document.querySelector(".visits");
let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;
visitsDisplay.textContent = numVisits;
numVisits++;
localStorage.setItem("numVisits-ls", numVisits);

// API

const currentTemp = document.getElementById("current-temp");
const weatherIcon = document.getElementById("weather-icon");
const captionDesc = document.querySelector("figcaption")

function displayResults(json) {
    currentTemp.innerHTML = `${json.main.temp}°F`
    const iconsrc = `https://openweathermap.org/img/w/${json.weather[0].icon}.png`
    let description = json.weather[0].description.toUpperCase();
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', description);
    captionDesc.textContent = `${description}`
}

const url = "https://api.openweathermap.org/data/2.5/weather?lat=-25.44&lon=-49.27&units=imperial&appid=5a9bd3bf31db6f483c38d1f5f0309e6b"

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