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

const displayMembers = (members) => {
    let container = document.querySelector("#members");

    members.forEach((member) => {
        let div = document.createElement("div");
        div.classList.add("member-card");

        let name = document.createElement("h2");
        name.textContent = member.name;
        div.appendChild(name);

        let image = document.createElement("img");
        image.setAttribute("src", `${member.image}`);
        image.setAttribute("alt", `${member.name} Logo`);
        image.setAttribute("class", `companyLogos`);
        div.appendChild(image);

        let membershipLevel = document.createElement("h4");
        membershipLevel.textContent = `Membership Level: ${member.membership_level}`;
        div.appendChild(membershipLevel);

        let address = document.createElement("h4");
        address.textContent = `Address: ${member.address}`;
        div.appendChild(address);

        let phone = document.createElement("h4");
        phone.textContent = `Phone: ${member.phone}`;
        div.appendChild(phone);

        let website = document.createElement("a");
        website.textContent = `${member.name} Website`;
        website.setAttribute("href", member.website);
        div.appendChild(website);

        let otherInfo = document.createElement("p");
        otherInfo.textContent = member.other_info;
        div.appendChild(otherInfo);

        container.appendChild(div);
    });
}


getLinks(linksURL);

const gridbutton = document.querySelector("#grid-btn");
const listbutton = document.querySelector("#list-btn");
const display = document.querySelector("#members");

listbutton.addEventListener("click", () => {

    if (display.id == "members") {
        display.id = "list-view";
    }
});

gridbutton.addEventListener("click", () => {

    if (display.id == "list-view") {
        display.id = "members";
    }
});
