//alert("Hola este es mi Javascript");

let Nombre= "Yadira";

var Nombre1 = "Yadira";

const Nombre2= "Yadira";

console.log(Nombre);
console.log(Nombre1);
console.log(Nombre2);

//seleccionar elementos

let contenidoTitulo = "Yadira";

let titulo = document.querySelector(".corazon")
titulo.innerHTML = contenidoTitulo;

//condicionales

let textoTitulo = titulo.innerText;
console.log(textoTitulo);

if(textoTitulo == "Nombre") {
    titulo.innerHTML = "otro"
} else{
    console.log("No se cumple")
}

//funciones

let nombre = "Yadira";
let ciudad = "Sapuyes";
let gusto = "comida de mar";

let parrafo = document.querySelector(".parrafo2");

function cambiartexto(nombre, ciudad, gusto) {
   let contenido = `me llamo ${nombre}, naci en ${ciudad} y vivo en el municipio de Cumbal, me gusta la ${gusto} y salir a conocer pueblitos y paisajes de nuestro bello departamento, ademas me gusta mucho escuchar musica`;

   return contenido;
}


let menu_responsive = document.querySelector(".checkbtn");

      menu_responsive.onclick = function () {
        navBar = document.querySelector(".navbar");
        navBar.classList.toggle("active");
      };

      
      





