function insert(num) {
    let resultado = document.querySelector('#resultado');
    resultado.innerHTML = resultado.innerHTML + num;
};

function clean() {
    document.querySelector('#resultado').innerHTML = '';
}

function back() {
    let resultado = document.querySelector('#resultado').innerHTML;
    document.querySelector("#resultado").innerHTML = resultado.slice(0, resultado.length -1)
}

function calcular() {
    let resultado = document.querySelector('#resultado').innerHTML;
    document.querySelector('#resultado').innerHTML = eval(resultado);
}