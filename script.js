//creamos una variable y le asignamos un elemento 
//que se encuentra en el codigo html
const h1 = document.querySelector('h1');

//mostramos el valor de la variable h1
console.log(h1);

//cambiamos el valor de la variable h1
h1.innerHTML = 'primer titulo';
h1.innerText = 'PRIMER TITULO';

//obtener el nombre de una clase
//creamos una variable y le asignamos el div del html
//creamos una nueva variable para almacenar el nombre 
//de la clase del div
var clase = document.querySelector('div');
var nombreClase = clase.getAttribute('class');
console.log(nombreClase);

//cambiar el nombre de un atributo
clase.setAttribute('class','cajita');
console.log(clase.getAttribute('class'));

//agregar o remover clases de un elemento
clase.classList.add('box','cont');
console.log(clase.getAttribute('class'));
clase.classList.remove('cont');
console.log(clase.getAttribute('class'));

//verificar si tiene o no una clase conocida
console.log(clase.classList.contains('cont'));
console.log(clase.classList.contains('box'));

//crear un elemento
var img = document.createElement('img');
//asignamos al atributo src una direccion de img
img.setAttribute('src','https://images.pexels.com/photos/209807/pexels-photo-209807.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500');
//insertamos la img en un elemento que ya existe
//para que podamos visualizarla
clase.append(img);


