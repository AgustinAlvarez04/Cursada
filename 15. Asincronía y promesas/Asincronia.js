"use:strict"

/* Modelo SINCRONICO */
/* Nuestro programa funciona de manera LINEAL, ejecutando una accion y despues otra, Solo se puede realizar una tarea a la vez y
cada tarea es bloqueante a la siguiente */

/* Modelo ASINCRONICO */
/* Este modelo permite que múltiples tareas sucedan a la vez. Al comenzar una acción, nuestro programa sigue en ejecución; 
y cuando la acción termina nuestro programa es informado y consigue acceso al resultado correspondiente. Cuando tenemos
tareas que no dependen entre si podemos decir que se pueden ejecutar en paralelo.*/

//  SetTimeOut
/* Genera una funcion que se va a ejecutar asincronicamente */
/* La función recibe dos parámetros: Una función de callback y un valor numérico que representa milisegundos */

setTimeout(function () {
    console.log("Estoy dentro de un Timeout");
}, 2000); // Esperamos 2 segundos para mostrar el mensaje
console.log("Continuo con mi vida normal afuera del TimeOut")

/* EJEMPLO REAL */

/* Podemos estilar un elemento del DOM tras un evento y removerle una clase tras cierto tiempo: */
const btn = document.getElementById('boton')
const popup = document.getElementById('popup-mensaje')

btn.addEventListener('click', () => {
    popup.classList.add('popup-active')

    setTimeout(() => {
        popup.classList.remove('popup-active')
    }, 2500)
})
/* Aquí se agrega una clase a un elemento tras clickear un botón, y luego se dispara un setTimeout que
remueve esa clase del elemento tras 2500 milisegundos. Permite automatizar un evento interactivo. */

// /* EJEMPLO REAL 2*/

// /* De forma sincrónica, esperamos ver en vertical un console.log de cada letra de ambos strings, uno después del otro: */
// for (let letra of "hola") {
//     console.log(letra)
// }

// for (let letra of "mundo") {
//     console.log(letra)
// }

/* EJEMPLO REAL 3*/

/* El iterador ejecuta de forma sincrónica los llamados al setTimeout por cada letra,
 y estos se resuelven en orden con el delay correspondiente de forma asincrónica: */
for (let letra of "hola") {
    setTimeout(() => {
        console.log(letra)
    }, 1000)
}

for (let letra of "mundo") {
    setTimeout(() => {
        console.log(letra)
    }, 3000)
}

//Ejemplo del profe
console.log("inicio del proceso")

setTimeout(() => {
    console.log("mitad del proceso")
}, 0)

console.log("final del proceso")


/* Call Stack (Pila)*/
/* Cuando voy generando un TimeOut estos se van apilando.
 Es una lista donde se apilan las distintas tareas a ejecutar por nuestro programa. 
 Javascript es un lenguaje single threaded, o de un único hilo, lo que significa que tiene un único stack o pila de ejecución. 
 De ahí que la ejecución es implícitamente sincrónica.
*/


/* ¿Cómo es el proceso de Call Stack? 
Cuando se está a punto de ejecutar una función, ésta es añadida al stack. Si la función llama a la vez, a otra función,
ésta es agregada sobre la anterior:
*/

function multiply (x, y) {    
    return x * y;
}

function printSquare (x) {    
    let s = multiply(x, x);    
    console.log(s);
}

printSquare(5);

/*Es una lista de tareas de JS a ejecutar durante el programa .
 Cada nueva instrucción se agrega en el orden que corresponde al stack y el motor de JS resuelve una a una. 
*/


/* Event Loop */
/* Muchas funciones asincrónicas se ejecutan en un stack diferente.
El Event Loop es la herramienta que permite la sincronización entre nuestro call stack con estas tareas asincrónicas que 
funcionan en un thread aparte. Si el stack está vacío, el Event Loop envía la primera función que esté en la CallBack Queue
al call stack y comienza a ejecutarse.
*/


/* setInterval */
/* Permite ejecutar funciones de manera reiterativa tras los milisegundos indicados hasta que
 indiquemos su detención o se cierre la aplicación.

   Tiene la misma sintaxis que setTimeout, pero la unidad de tiempo es un intervalo para
 la repetición de la función asociada:
*/

setInterval(() => {
    console.log("Tic") //Ejecuta "Tic" cada intervalo de segundos que ingresemos.
}, 1000)

/* ClearInterval & ClearTimeOut */
/* En caso de querer remover un Intervalo, utilizamos la función clearInterval (). 
También podemos detener la ejecución de un setTimeout invocando clearTimeout ().
*/

/* Cuando llamamos un setInterval() éste retorna una referencia al intervalo generado, el cual podemos almacenar en una variable. 
Es esta referencia la que debemos pasar a la función clearInterval para que la limpieza tenga efecto: */

let counter = 0
const interval = setInterval(() => {
    counter++
    console.log("Counter: ", counter)

    if (counter >= 5) {
        clearInterval(interval)
        console.log("Se removió el intervalo")
    }
}, 1000)

/* Funciona igual con los timeout. Si guardamos en una variable la referencia al timeout generado, podemos usarla para removerlo luego. 
En el siguiente caso, el timeout generado nunca llega a ejecutarse: */

console.log("Inicio")

const fin = setTimeout(() => {
    console.log("fin")
}, 2000)

clearTimeout(fin)