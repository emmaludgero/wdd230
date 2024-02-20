const baseURL = "https://emmaludgero.github.io/wdd230/";
const linksURL = "https://emmaludgero.github.io/wdd230/data/links.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    console.log("Links: ", data);
    document.getElementById('links').innerHTML = displayLinks(data);
}

getLinks();

function displayLinks(data) {
    let html = '<ul>';

    data.weeks.forEach(week => {
        html += `<li><strong>${week.week}:</strong> `;
        week.links.forEach(link => {
            html += `<a href="${link.url}">${link.title}</a> | `;
        });
        // Remove o último " | " adicionado
        html = html.slice(0, -2);
        html += '</li>';
    });

    html += '</ul>';
}