

// Faz a chamada de API
let response = fetch('https://brasilapi.com.br/api/cep/v1/82540360')
    .then(response => {
        // Verifica se a resposta está OK
        if (!response.ok) {
            throw new Error('Erro na requisição');
        }
        // Retorna os dados como JSON
        return response.json();

    })
    .then(data => {
        // Manipula os dados recebidos
        console.log(data);
        // Aqui você pode fazer o que quiser com os dados, por exemplo, exibir na tela
        // document.getElementById('resultado').innerText = JSON.stringify(data);
    })
    .catch(error => {
        // Captura e trata erros
        console.error('Erro ao obter os dados:', error);
    });

console.log(response);