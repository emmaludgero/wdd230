// Variables

let oLastModif = new Date(document.lastModified);
let actualYear = new Date().toLocaleDateString("en-US", { year: "numeric" })

// Modifing HTML

const lastModified = document.getElementById('lastModified');
lastModified.textContent = oLastModif.toLocaleDateString("en-US", { day: "numeric", month: "numeric", year: "numeric", hour: "2-digit", minute: "2-digit" })