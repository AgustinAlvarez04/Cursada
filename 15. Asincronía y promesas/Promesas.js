"use:strict"

/* ¿QUÉ ES UNA PROMESA EN JS?
Es un objeto de Javascript que representa un evento a futuro. Es una acción asincrónica que se puede completar en algún momento y
producir un valor, y notificar cuando esto suceda. Una promesa cuenta con tres estados posibles: pending, fulfilled y rejected.
Las promesas pueden ser resueltas o rechazadas.
*/

/* Podemos crear promesas a través de su constructor new Promise. Su sintaxis es algo compleja,
ya que recibe una función por parámetro que a su vez recibe por parámetro las funciones de resolve y reject
*/

new Promise( (resolve, reject) => {
    //cuerpo de la promesa
})


/* Resolve & Reject */
/* En principio, una promesa se retorna con estado pending, entendiendo que el valor a generar aún no fue resuelto: */

function eventoFuturo(){
    return new Promise( (resolve, reject) => {
        //cuerpo de la promesa
    } )
}
console.log( eventoFuturo() ) // Promise { <pending> }

/* Esta función retorna una promesa que no se resuelve. Por lo tanto, veremos que el valor que genera es un objeto
Promise con estado pendiente. 

El valor de retorno de la promesa se define a través del llamado a las funciones de resolve o reject:

Si el cuerpo de la promesa llama a resolve(), la promesa cambiará su estado a fulfilled, con el valor enviado a resolve().
Si la promesa llama a reject(), cambiará su estado a rejected con el valor enviado al reject(). */

/* Aquí podemos ver cómo cambia de estado la promesa con distintos valores.
Según el llamado de la función la promesa se verá resuelta o rechazada.
Sin embargo, lo que vemos por consola es el objeto Promise que retorna la función
y con lo que nos interesa trabajar en realidad es con el valor de resolución de la promesa
*/

function eventoFuturo(res){
    return new Promise( (resolve, reject) => {
        if (res === true) {
            resolve('Promesa resuelta')
        } else {
            reject('Promesa rechazada')
        }
    })
}

console.log( eventoFuturo(true) ) // Promise { 'Promesa resuelta' }
console.log( eventoFuturo(false) ) // Promise { <rejected> 'Promesa rechazada' }


/* Miremos el mismo caso agregando un delay con setTimeout: */

function eventoFuturo(res){
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            res ? resolve('Promesa resuelta') : reject('Promesa rechazada')
        }, 2000)
    })
}

console.log( eventoFuturo(true) ) // Promise { <pending> }
console.log( eventoFuturo(false) ) // Promise { <pending> }

/* En este caso, el console.log es sincrónico y vemos que la promesa está en pending en ambos llamados (su resolución se generará dentro de 2s).
Las promesas tienen un mecanismo para trabajar esta asincronía y poder ejecutar funciones cuando cambie su estado. */

/* Then & Catch */
/* Al llamado de una función que retorne una promesa, podemos concatenar el método .then() o .catch(),
los cuales reciben una función por parámetro con la cual se captura el valor de la promesa:

.then() : Si la promesa es resuelta ✅, su valor de retorno se captura dentro del .then(), recibiendo por parámetro de su función ese valor.
.catch() : si la promesa es rechazada ❌, su valor se captura dentro de un .catch() siguiendo la misma lógica.

*/

/* Lo que queramos ejecutar cuando la promesa se resuelva o rechace,
debemos definirlo dentro de un .then() o .catch(), según el caso: */

eventoFuturo(true)
    .then( (response) => {
        console.log(response) // Promesa resuelta
    })

eventoFuturo(false)
    .catch( (error) => {
        console.log(error) // Promesa rechazada
    })



/* Se aprecian los console.log tras 2 segundos de delay y lo que vemos es, precisamente,
el valor que retornan el resolve o reject de la promesa. */

/* Como una promesa puede tener varios estados posibles, se puede concatenar varios .then() o .catch() en un mismo llamado,
y caeremos en el caso que corresponda según cómo se haya resuelto la promesa.

Esto quiere decir que:

Para cada promesa podemos definir una estructura para trabajar los distintos casos posibles.
Cada promesa sólo puede resolverse o rechazarse una única vez.
Es un mecanismo de control claro y ordenado para trabajar la asincronía y los posibles valores a recibir 😄.*/


/* Finally */
/* finally() es un método que recibe una función la cual se ejecutará siempre al finalizar la secuencia,
sin importar si se haya resuelto o no la promesa: */

eventoFuturo(true)
    .then( (response) => {
        console.log(response)
    })
    .catch( (error) => {
        console.log(error)
    })
    .finally( () => {
        console.log("Fin del proceso")
    })
// Promesa resuelta
// Fin del proceso
