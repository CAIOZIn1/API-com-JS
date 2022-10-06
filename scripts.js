async function buscaEndereco(cep) {

    var mensagemErro = document.getElementById('erro');
    mensagemErro.innerText = '';

    try {
        var consultaEndereco = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        var consultaCepConvertida = await consultaEndereco.json();
        if (consultaCepConvertida.erro){
            mensagemErro.innerHTML = '<p style="color: red">CEP inexistente, tente novamente.</p>'
        }

        var cidade = document.getElementById('cidade');
        var logradouro = document.getElementById('endereco');
        var estado = document.getElementById('estado');

        cidade.value = consultaCepConvertida.localidade;
        logradouro.value = consultaCepConvertida.logradouro;
        estado.value = consultaCepConvertida.uf;

    } catch (erro) {
        mensagemErro.innerHTML = '<p style="color: red">CEP inválido, tente novamente.</p>'
        console.log(erro);
    }

}

var cep = document.getElementById('cep');

cep.addEventListener('focusout', () => {buscaEndereco(cep.value)});