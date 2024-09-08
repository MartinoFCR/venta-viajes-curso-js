import { barcelona, roma, paris, londres} from './ciudades.js';

// Obtener los elementos del DOM

let enlaces = document.querySelectorAll('a');
let tituloElemento = document.getElementById('titulo');
let subtituloElemento = document.getElementById('subtitulo');
let parrafoElemento = document.getElementById('parrafo');
let precioElemento = document.getElementById('precio');

// Agrergar eventos a los elementos del DOM

enlaces.forEach(function(enlace) {
  enlace.addEventListener('click', function(){
    //Remover la clase activo de todos los enlaces
    enlaces.forEach(function(enlace) {
      enlace.classList.remove('active');
    })
  

    // Agregar la clase activo al enlace que se le dio click
    this.classList.add('active');

    // Obtener la información del objeto correspondiente a la elección
    let contenido = obtenerContenido(this.textContent);

    // Cambiar el contenido del DOM
    tituloElemento.innerHTML = contenido.titulo;
    subtituloElemento.innerHTML = contenido.subtitulo;
    parrafoElemento.innerHTML = contenido.parrafo;
    precioElemento.innerHTML = contenido.precio;
  });
});

// Función para traer la información correcta desde ciudades.js
function obtenerContenido(enlace) {
  let contenido = {
    'Barcelona' : barcelona,
    'Roma' : roma,
    'París' : paris,
    'Londres' : londres
  };
  return contenido[enlace];
}