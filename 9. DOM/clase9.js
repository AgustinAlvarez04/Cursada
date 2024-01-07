"use:strict"

/* DOM 
console.log(document)
document.title = "Probando Dom"
console.log(document.title)*/

//Tipos de NODOS - Document, Element, Attr, Text, Comment

/*Acceso al DOM*/

//Metodos mas comunes para acceder al DOM

/* InnerText = La propiedad de InnerTExt de un nodo nos permite modioficar su nodo de texto 
   InnerHTML = Permite definir el codigo html interno del elemento seleccionado */

//getElementById()
console.log(document.getElementById("boton1"))
let boton1 = document.getElementById("boton1")
console.log(boton1.innerHTML)
console.log(boton1.innerText)

let input1 = document.getElementById("input1")
input1.value = "Holaa salio bien"

//getElementsByClassName()

let paises = document.getElementsByClassName("paises");
console.log(paises);
//De esta forma podemos cambiar el html desde doom por JS - Hay que escribirlo como si fuera el html - Resultado en el DOM
paises[0].innerHTML = "<p> Modifique y Cree un parrafo aqui xd<p>"

let paises2 = document.getElementsByClassName("paises2")
console.log(paises2)
//De esta forma cambio la class - Resultado en el DOM
paises2[0].className = "Nuevos paises"

//getElementsByTagName()
let tag = document.getElementsByTagName("li")
console.log(tag)

//Agregar o Quitar NODOS
//AGG
let parrafo = document.createElement("p");
parrafo.innerText = "Este es un parrafo dentro de un li"
paises[1].appendChild(parrafo); //Si no lo meto en algun lugar el codigo de arriba no se muestra en ningun lado
//SACAR
paises[0].remove()

//Crear mas li
let padre = document.getElementById("personas")
let personas = ["Agus", "Cami", "Santi"]
for (const persona of personas) {
   let li = document.createElement("li")
   li.innerHTML = persona
   padre.appendChild(li)
}

//Plantillas de textos
// `${plantilla}`

const productos = [
   { id: 1, nombre: "Arroz", precio: 100 },
   { id: 2, nombre: "Azucar", precio: 110 },
   { id: 3, nombre: "Leche", precio: 120 },
]

let select = document.getElementById("select")

for (const producto of productos) {
   let contenedor = document.createElement("option");
   contenedor.innerText = `ID: ${producto.id} Nombre: ${producto.nombre} Precio: $${producto.precio}`;
   select.appendChild(contenedor);
}

//QuerySelector()
// puedo seleccionar la etiqueta <p> siguiendo la sintaxis de CSS para selectores:
let parrafo1 = document.querySelector("#contenedor p")
// seleccionar sólo el contenedor por id con #
let contenedor = document.querySelector("#contenedor")
// o por clase:
parrafo1 = document.querySelector(".texto")

//Lo interesante del querySelector es que también aplica a pseudo-clases de CSS, brindando un nivel más avanzado de precisión:
let radioChecked = document.querySelector(".radio:checked")

/*Suponiendo que tengo elementos html radio button y quiero seleccionar sólo aquel que esté en checked,
 ésto lo puedo lograr muy fácil con querySelector y la pseudo-clase :checked de CSS.*/

//Puede ser usado para obtener todos los nodos del DOM que cumplan una condición
document.querySelectorAll('input')






