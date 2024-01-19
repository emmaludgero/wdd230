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

const nav = document.querySelector('.navigation');
const button = document.querySelector('#menu');

button.addEventListener('click', () => {
    nav.classList.toggle('show');
    button.classList.toggle('show');
})