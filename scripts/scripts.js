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

modeButton.addEventListener("click", () => {
    if (modeButton.textContent.includes("🕶")) {
        main.style.background = "#222E42";
        main.style.color = "#F2F5FA";
        menuButton.style.background = "#222E42";
        menuButton.style.color = "#F2F5FA";

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