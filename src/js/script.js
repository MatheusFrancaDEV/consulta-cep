let cep = document.getElementById('cep');
let logradouro = document.getElementById('logradouro');
let bairro = document.getElementById('bairro');
let localidade = document.getElementById('localidade');
let uf = document.getElementById('uf');
const btnConsult = document.getElementById('consultar');

btnConsult.addEventListener('click', async (event) =>{
    event.preventDefault();

    const resposta = await (await fetch('https://viacep.com.br/ws/'+ cep.value + '/json/')).json();

    cep.value = resposta.cep;
    logradouro.value = resposta.logradouro;
    bairro.value = resposta.bairro;
    localidade.value = resposta.localidade;
    uf.value = resposta.uf;
})