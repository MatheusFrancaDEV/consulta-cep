let cep = document.getElementById('cep');
let logradouro = document.getElementById('logradouro');
let bairro = document.getElementById('bairro');
let localidade = document.getElementById('localidade');
let uf = document.getElementById('uf');
const btnConsult = document.getElementById('consultar');

function verificedValues(){{
    let labelFor = document.querySelectorAll('label');

    if(logradouro.value == ""){
        logradouro.style.display = "none";
        bairro.style.display = "none";
    }
    else{
        labelFor[1].style.display = "block";
        labelFor[2].style.display = "block";
        logradouro.style.display = "block";
        bairro.style.display = "block";
    }
}}

btnConsult.addEventListener('click', async (event) =>{
    event.preventDefault();

    const resposta = await (await fetch('https://viacep.com.br/ws/'+ cep.value + '/json/')).json();

    cep.value = resposta.cep;
    logradouro.value = resposta.logradouro;
    bairro.value = resposta.bairro;
    localidade.value = resposta.localidade;
    uf.value = resposta.uf;

    console.log(resposta)
    verificedValues();
})