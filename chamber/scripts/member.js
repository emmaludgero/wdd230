const baseURL = "https://emmaludgero.github.io/wdd230/";
const linksURL = "https://emmaludgero.github.io/wdd230/chamber/data/members.json";

async function getLinks(url) {

    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log("Response: ", JSON.stringify(data));
        displayMembers(data.members);
    } catch (error) {
        console.log('Error fetching data:', error);
    }
}


const x = (members) => {
    weeks.forEach((week) => {

        let links = document.querySelector("#members");

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

const displayMembers = (members) => {
    let container = document.querySelector("#members");

    members.forEach((member) => {
        let div = document.createElement("div");
        div.classList.add("member");

        let name = document.createElement("h2");
        name.textContent = member.name;
        div.appendChild(name);

        let address = document.createElement("p");
        address.textContent = `Address: ${member.address}`;
        div.appendChild(address);

        let phone = document.createElement("p");
        phone.textContent = `Phone: ${member.phone}`;
        div.appendChild(phone);

        let website = document.createElement("a");
        website.textContent = "Website";
        website.setAttribute("href", member.website);
        div.appendChild(website);

        let image = document.createElement("img");
        image.setAttribute("src", `images/${member.image}`);
        div.appendChild(image);

        let membershipLevel = document.createElement("p");
        membershipLevel.textContent = `Membership Level: ${member.membership_level}`;
        div.appendChild(membershipLevel);

        let otherInfo = document.createElement("p");
        otherInfo.textContent = member.other_info;
        div.appendChild(otherInfo);

        container.appendChild(div);
    });
}


getLinks(linksURL);