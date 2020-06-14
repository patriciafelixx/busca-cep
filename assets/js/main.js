const cepInput = document.querySelector('#cep');
const ruaInput = document.querySelector('#rua');
const bairroInput = document.querySelector('#bairro');
const ufInput = document.querySelector('#uf')

const buscaCep = (e) => {
    const cepDigitado = e.target.value;

    if (cepDigitado.length != 8) {
        return;
    }

    fetch(`https://viacep.com.br/ws/${cepDigitado}/json`)
    .then((res) => { return res.json() })
    .then((data) => {
        ruaInput.value = data.logradouro;
        bairroInput.value = data.bairro;
        ufInput.value = data.uf;
        cepInput.value = data.cep;
    })
}

cepInput.addEventListener('input', buscaCep);