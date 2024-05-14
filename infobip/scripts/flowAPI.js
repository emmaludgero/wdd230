// Capturando o formulário pelo ID

console.log("Entrei no flow")
var formulario = document.getElementById("forms");
console.log(formulario);
// Adicionando um ouvinte de evento para o evento 'submit' do formulário
formulario.addEventListener("submit", function (event) {

    console.log("Entrei no addEventListener")

    // Evitando o comportamento padrão de enviar o formulário
    event.preventDefault();

    // Obtendo o valor do campo de texto pelo nome
    var fName = formulario.elements["fname"].value;
    var lName = formulario.elements["lname"].value;
    var email = formulario.elements["email"].value;
    var phone = formulario.elements["phone"].value;
    var membership = formulario.elements["membership"].value;
    var position = formulario.elements["position"].value;

    // Exibindo o valor do campo
    console.log(fName);
    console.log(lName);
    console.log(email);
    console.log(phone);
    console.log(membership);
    console.log(position);

    var settings = {
        "url": "https://zjvjz6.api.infobip.com/moments/1/flows/200000023682956/participants",
        "method": "POST",
        "timeout": 0,
        "headers": {
            "Authorization": "App aa95bdf2b687ae5e3c74d1f4bdb6ed05-43d4bb1c-6cff-42fc-a514-401fe14edc7d",
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        "data": JSON.stringify({
            "participants": [
                {
                    "identifyBy": {
                        "identifier": phone,
                        "type": "PHONE"
                    },
                    "variables": {
                        "membershipLevel": membership,
                        "fName": fName
                    },
                    "person": {
                        "customAttributes": {
                            "membershipLevel": membership,
                            "jobPosition": position
                        },
                        "contactInformation": {
                            "email": [
                                {
                                    "address": email
                                }
                            ]
                        }
                    }
                }
            ],
            "notifyUrl": "https://ibceptor.infobip-portal.com/c79cd0cd-f411-45a9-a843-183a3ef0e0b9",
        }),
    };


    url = "https://zjvjz6.api.infobip.com/moments/1/flows/200000023682956/participants"



    $.ajax(settings).done(function (response) {
        console.log(response);
        console.log(JSON.stringify(response));
        formulario.submit();
    });



});


// Infobip Provided Documentation

// setTimeout(function () {
//    formulario.submit();
// }, 1000);