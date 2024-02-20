const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');

async function getProphetData(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.table(data.prophets);
        displayProphets(data.prophets); // passing the prophets array to displayProphets function
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        // create section element for card
        const card = document.createElement('section');

        // create h2 element for full name
        const fullName = document.createElement('h2');
        fullName.textContent = `${prophet.name} ${prophet.lastname}`;

        // create img element for portrait
        const portrait = document.createElement('img');
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', prophet.name);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '100');
        portrait.setAttribute('height', 'auto');

        // Birth info
        const birthDate = document.createElement('p');
        birthDate.textContent = `Birth date: ${prophet.birthdate}`
        const birthPlace = document.createElement('p');
        birthPlace.textContent = `Place of Birth: ${prophet.birthplace}.`

        // append full name and portrait to card
        card.appendChild(fullName);
        card.appendChild(birthDate);
        card.appendChild(birthPlace);
        card.appendChild(portrait);

        // append card to cards container
        cards.appendChild(card);
    });
};

getProphetData(url);