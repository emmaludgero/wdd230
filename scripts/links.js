const baseURL = "https://emmaludgero.github.io/wdd230/";
const linksURL = "https://emmaludgero.github.io/wdd230/data/links.json";

async function getLinks(url) {
    console.log("A");
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log("Response: ", JSON.stringify(response));
        displayLinks(data.weeks);
    } catch (error) {
        console.log('Error fetching data:', error);
    }
}


const displayLinks = (weeks) => {
    weeks.forEach((week) => {

        let links = document.querySelector("#links");

        let weekNumbers = document.createElement("li");

        weekNumbers.textContent = `${week.week}:  `;
        links.appendChild(weekNumbers);

        week.links.forEach((link) => {

            let task = document.createElement("a");

            task.textContent = link.title;
            task.setAttribute("href", link.url)

            let divider = document.createElement("span");
            divider.textContent = " | ";


            weekNumbers.appendChild(task);
            weekNumbers.appendChild(divider);

        })
    });
}

getLinks(linksURL);