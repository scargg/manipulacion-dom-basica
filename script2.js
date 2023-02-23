const input1 = document.querySelector('.input1');
const input2 = document.querySelector('.input2');
const boton = document.querySelector('button');
const result = document.createElement('p');
const caja = document.querySelector('.resultado');
const form = document.querySelector('.form');

input1.setAttribute('placeholder','valor inicial');
input2.setAttribute('placeholder','valor final');
boton.innerText = 'Calcular';
form.addEventListener('submit', onclick);
caja.append(result);

function onclick (e){
    e.preventDefault();
    const suma = Number(input1.value) + Number(input2.value);
    result.innerText = 'Resultado: ' + suma;
};
