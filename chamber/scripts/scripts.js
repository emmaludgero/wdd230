document.addEventListener('DOMContentLoaded', function () {

    // Variables

    let oLastModif = new Date(document.lastModified);
    let actualYear = new Date().toLocaleDateString("en-US", { year: "numeric" })
    let flag = '\u{1F1E7}\u{1F1F7}';
    let currentDateTime = new Date().toLocaleString();

    console.log(currentDateTime);

    // Modifing HTML

    const lastModified = document.getElementById('lastModified');
    lastModified.textContent = oLastModif.toLocaleDateString("en-US", { day: "numeric", month: "numeric", year: "numeric", hour: "2-digit", minute: "2-digit" })

    document.getElementById("flag").textContent = flag;

    // Evento para copiar o endereço de email ao clicar nele. 

    document.getElementById('emailLink').addEventListener('click', function (event) {
        // Obtém o endereço de e-mail do atributo href
        var email = this.getAttribute('href').replace('mailto:', '');
        // Cria um elemento de texto temporário
        var tempElement = document.createElement('textarea');
        // Define o valor do elemento de texto como o endereço de e-mail
        tempElement.value = email;
        // Adiciona o elemento de texto ao corpo do documento
        document.body.appendChild(tempElement);
        // Seleciona e copia o conteúdo do elemento de texto
        tempElement.select();
        document.execCommand('copy');
        // Remove o elemento de texto temporário
        document.body.removeChild(tempElement);
        //**  Alerta o usuário que o endereço de e-mail foi copiado
        Swal.fire({
            text: 'Email copied',
            icon: 'success',
            showConfirmButton: false,
            timer: 1500   // Aqui você pode definir o ícone desejado
        });
        // Impede o comportamento padrão do link
        event.preventDefault();
    });
    // Hamburguer menu

    const nav = document.querySelector('.navigation');
    const menuButton = document.querySelector('#menu');

    menuButton.addEventListener('click', () => {
        nav.classList.toggle('show');
        menuButton.classList.toggle('show');
    })

    // Timestamp

    document.addEventListener('DOMContentLoaded', function () {

        document.getElementById('timestamp').value = currentDateTime;
    });

    // Validates pattern

    window.onload = function () {
        document.getElementById('forms').addEventListener('submit', function (event) {
            var positionInput = document.getElementById('position').value;
            var regex = /^[a-zA-Z -]{7,}$/;
            if (!regex.test(positionInput)) {
                alert('Please fill in the field with at least seven alphabetic characters, spaces, or hyphens.');
                event.preventDefault(); // Impede o envio do formulário se a validação falhar
            }
        });
    };

    // Last Visit

    const msPerDay = 86400000;
    const thisVisit = new Date();

    // Phrases
    const firstVisitMsg = "Welcome! Let us know if you have any questions";
    const soonVisitMsg = "Back so soon! Awesome!";

    let visitDate = localStorage.getItem("visitDate-ls");

    let daysSinceVisit = visitDate ? (thisVisit - new Date(visitDate)) / msPerDay : 0;

    if (daysSinceVisit !== 0) {

        if (daysSinceVisit > 0 && daysSinceVisit < 1) {
            document.querySelector("#visit-msg").textContent = soonVisitMsg;
        } else if (daysSinceVisit > 1) {
            document.querySelector("#visit-msg").textContent = `You last visited ${Math.floor(daysSinceVisit)} days ago`;

        }
    } else {
        document.querySelector("#visit-msg").textContent = firstVisitMsg;
    }

    localStorage.setItem("visitDate-ls", thisVisit);

});