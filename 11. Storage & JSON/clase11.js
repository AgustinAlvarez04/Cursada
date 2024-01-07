"use:strict"
/* CLAVE - VALOR
    La información almacenada en el Storage se guarda en la forma de clave-valor. 
    Similar al tratamiento de objetos, definimos claves en el storage donde almacenamos valores.
*/
/* Localstorage
    Los datos almacenados en LocalStorange, se almacenan en el navegador de forma indefinida.
    Todo valor guardado se guarda en STRING
   
   Para almacenar informacion se utiliza
    LocalStorage:SetItem

   Para acceder a la informacion almacenada se utiliza
    LocalStorage:GetItem

    SesionStorage
    La informacion almacenada en SesionStorage, se almacena en el navegador hasta que el usuario cierre la pestaña.

   Para almacenar informacion se utiliza
    SesionStorage:SetItem

   Para acceder a la informacion almacenada se utiliza
    SesionStorage:GetItem

    // PARA LIMPIAR EL STORAGE SE UTILIZA .clear()
*/
/* Es posible obtener todos los valores almacenados en localStorage o sessionStorage con un bucle.
El bucle a emplear es for con el método key:

for (let i = 0; i < localStorage.length; i++) {
    let clave = localStorage.key(i);
    console.log("Clave: "+ clave);
    console.log("Valor: "+ localStorage.getItem(clave));
}
*/

// //Si borro esto, los datos se borran del navegador
// sessionStorage.setItem("nombre", "Agustin")
// sessionStorage.setItem("apellido", "Alvarez")
// sessionStorage.setItem("edad", 20)
// //Si salgo del navegador esta sentencias me daran null
// let nombre = sessionStorage.getItem("nombre")
// let apellido = sessionStorage.getItem("apellido")
// let edad = sessionStorage.getItem("edad")

// console.log(nombre, apellido, edad)

// localStorage.setItem("nombre", "Camila")
// localStorage.setItem("apellido", "Martinez")
// localStorage.setItem("edad", 21)
// localStorage.setItem("ahorros", 150)

// let nombre2 = localStorage.getItem("nombre")
// let apellido2 = localStorage.getItem("apellido")
// let edad2 = localStorage.getItem("edad")
// let ahorros = Number(localStorage.getItem("ahorros"))

// console.log(nombre2)
// console.log(apellido2)
// console.log(edad2)
// console.log(ahorros + 50)

// /* Esto es un problema, despues del break vemos como solucionarlo */
// localStorage.setItem("array", [1,2,3,4])
// localStorage.setItem("objeto", {dato1: 25, dato2: "pepe"})

// let array = localStorage.getItem("array")
// let objeto = localStorage.getItem("objeto")

// console.log(array)
// console.log(objeto)


// /*  JSON 
//     JavaScript Object Notation (JSON) es un formato basado en texto plano
//     para representar datos estructurados con la sintaxis de objetos de JavaScript.
//     Contiene solo propiedades, no metodos.
// */

// // Conversion de datos de un OBJETO a JSON
// // Con JSON.stringify podemos transformar un objeto JavaScript a un string en formato JSON. 
// objeto = {dato1: 25, dato2:"holaa"}
// console.log(JSON.stringify(objeto))

// // Conversion de datos de JSON a un OBJETO
// // Con JSON.parse podemos transformar string en formato JSON a objeto JavaScript.
// let objetoJSON = '{"dato1":25,"dato2":"holaa"}'
// console.log(JSON.parse(objetoJSON))


/* Ejercicio:
    Realiza un algoritmo que almacene información en Storage y guarde un array de objetos en formato JSON.

    Deberá cumplir los siguientes requisitos:
    Almacenar en Storage información ingresada por el usuario. Puede ser un texto, números, o combinación.
    Luego mostrarla mediante alert o console. Declarar un array de objetos (literales, con funciòn constructora o con clases)
    y almacenar el array en formato JSON en el storage.*/

let nombre = prompt("Ingresa tu nombre");
sessionStorage.setItem("nombre", nombre);
console.log(nombre)
let arrayOb = [
    { apellido: "Alvarez" },
    { edad: 20 }
]
sessionStorage.setItem("array", JSON.stringify(arrayOb))
const nombres = []

function guardarNombre() {
    let nombre = prompt("Ingresa tu nombre");
    nom = sessionStorage.setItem("nombre", nombre)
    alert(`Tu nombre es ${nombre}`);
    nombres.push(nombre)
    arr = JSON.stringify(sessionStorage.setItem("array", nombres))
}

guardarNombre()







