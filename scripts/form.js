// Rating

const rangevalue = document.getElementById("rangevalue");
const range = document.getElementById("r");

// RANGE event listener
range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);

function displayRatingValue() {
    rangevalue.innerHTML = range.value;
}

// Matching passwords

const pss = document.querySelector("#pss");
const pss2 = document.querySelector("#pss2");
const message = document.querySelector("#formmessage");

pss2.addEventListener("focusout", checkSame);

function checkSame() {
    if (pss.value !== pss2.value) {
        message.textContent = "❗Passwords DO NOT MATCH!❗";
        message.style.visibility = "visible";
        pss2.style.backgroundColor = "#fff0f3";
        pss2.value = "";
        pss2.focus();
    } else {
        message.style.visibility = "hidden";
        pss2.style.backgroundColor = "#fff";
        pss2.style.color = "#000";
    }
}