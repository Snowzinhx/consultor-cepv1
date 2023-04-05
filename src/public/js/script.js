const cep = document.getElementById("cep"),
logradouro = document.getElementById('logradouro'),
bairro = document.getElementById('bairro'),
cidade = document.getElementById('cidade'),
ddd = document.getElementById('ddd'),
btnSubmit = document.getElementById('btnSubmit'),
textError = document.getElementById('textError');

document.addEventListener('submit', async event=>{
    event.preventDefault()
});

cep.addEventListener('keyup', ()=>{
    logradouro.value = '';
    bairro.value = '';
    cidade.value = '';
    ddd.value = '';
});

async function buscarCep() {
    if (!cep.value) {
        textError.innerHTML = "Escreva algo antes de continuar!"
    } else {
        const consumeApi = await fetch(`https://viacep.com.br/ws/${cep.value}/json/`, {
            method: 'GET'
        });
        const result = await consumeApi.json();
        logradouro.value = result.logradouro ? `Rua ${result.logradouro}` : 'Rua: N/A';
        bairro.value = result.bairro ? `Bairro ${result.bairro}` : 'Bairro: N/A';
        cidade.value = result.localidade ? `${result.localidade} - ${result.uf}` : 'Não foi possível localizar!';
        ddd.value = result.ddd ? `DDD: (${result.ddd})` : `DDD: N/A`;
        cep.value = '';
        textError.innerHTML = '';
    }
    
    
};

