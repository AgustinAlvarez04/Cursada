"use:strict"

/* OPERADORES AVANZADOS */

//SUGAR SINTAX - Ejemplo: 
//  El operador "++"
let num = 10
console.log(num)
num = num + 1   //11
console.log(num)
num += 1    // primera simplificacion : 12
console.log(num)
num++   // o bien: 13
console.log(num)  //mostrara 13

//  El operador "--"
num = num - 1
num -= 1
num--
console.log(num)

//  Operador ternario
let temperatura = 35
//Simplifica la estructura condicional if..else. Consta si o si de 3 partes:
temperatura > 30 ? console.log("Caluroso") : console.log("No caluroso")
//   Condicion          Caso 1               Caso 2
//La condicion devuelve true o false, Caso 1 = True, Caso 2 = False

//  Este operador tiene un return implicito 
let edad = 20;
const esMayorEdad = (edad >= 18) ? 'Es mayor de edad' : 'No es mayor de edad';
console.log(esMayorEdad);

//  Operador Logico AND - Esto NO es una particularidad del AND, sino una consecuencia de como funciona
//Ambas condiciones deben cumplirce para devolver TRUE, basta con que una no se cumpla para que devuelva FALSE
//NUMERO DIFERENTE DE 0 ES VERDADERO, 0 ES FALSO

const carrito = []
carrito.length === 0 && console.log("El carrito está vacío!")

//El codigo de arriba, equivale a esto..
if (carrito.length === 0) {
    console.log("El carrito está vacío!")
}

//Si la condicion se cumple ejecuta la sentencia.

//  Operador Logico OR ( || ) - Similar al anterior, con la diferencia que consta de dos operandos y
// no de una condición explícita: operando1 || operando2.
// Si no es FALSY : si es dinstinto de 0, null, undefined, NaN, false, o string vacio. OR retorna operador1, sino "operador2

console.log(0 || "Falsy")  // Falsy
console.log(40 || "Falsy")  // 40
console.log(null || "Falsy")  // Falsy
console.log(undefined || "Falsy")  // Falsy
console.log("Hola Mundo" || "Falsy")  // Hola Mundo
console.log("" || "Falsy")  // Falsy
console.log(NaN || "Falsy")  // Falsy
console.log(true || "Falsy")  // true
console.log(false || "Falsy")  // Falsy

/* NOTA: NO USAR SOLO SABER QUE EXISTE */

//  Operador Nullish Coalescing
// Este Operador (??) funciona igual que el Operador OR ( || ), con la diferencia que admite más valores como ‘verdaderos’
console.log(0 ?? "Nullish")  // 0
console.log(40 ?? "Nullish")  // 40
console.log(null ?? "Nullish")  // Nullish
console.log(undefined ?? "Nullish")  // Nullish
console.log("Hola Mundo" ?? "Nullish")  // Hola Mundo
console.log("" ?? "Nullish")  // ""
console.log(NaN ?? "Nullish")  // NaN
console.log(true ?? "Nullish")  // true
console.log(false ?? "Nullish")  // false

//  Acceso condicional a un objeto - Si intentamos acceder a un objeto que no existe naturalmente obtendremos un error.
//Pero, si usamos el operador ? sobre la referencia de un objeto para condicionar su acceso podemos tener un mejor control
//de errores en la ejecución:
const usuario = null

// console.log( usuario.nombre || "El usuario no existe" )
// Error: "No se pueden leer propiedades de NULL"

console.log(usuario?.nombre || "El usuario no existe")
// "El usuario no existe"

//También puede aplicarse sobre propiedades que sean objetos para evaluar su existencia/validez y controlar los flujos del programa:

const usuario1 = {
    nombre: "John Doe",
    edad: 22,
    cursos: {
        javascript: "aprobado"
    }
}

console.log(usuario1?.cursos?.javascript || "La propiedad no existe")
// "aprobado"
console.log(usuario1?.trabajos?.coderhouse || "La propiedad no existe")
// "La propiedad no existe"


/* DESESTRUCTURACION - Se usa mucho para crear LIBRERIAS */
//Es una técnica que nos permite declarar variables donde guardar propiedades de un objeto de forma rápida y directa.

const usuario2 = {
    nombre2: "John Doe",
    edad2: 32,
}
/* let nombre = usuario2.nombre
let edad = usuario2.edad*/

let { nombre2, edad2 } = usuario2

//Quiere decir que estamos creando dos variables, prop1 y prop2,
// donde se almacenan las propiedades con el mismo nombre del objeto que referenciamos a la derecha.

//Los nombres de las variables deben coincidir exactamente con los nombres de las propiedades que queremos obtener del objeto.
const usuario3 = {
    nombre3: "John Doe",
    edad3: 32
}

const { nombre3, edad3 } = usuario3

console.log(nombre3) // "John Doe"
console.log(edad3) // 32

//Si intentamos desestructurar una propiedad inexistente en el objeto, obtendremos undefined.
// const { telefono } = usuario // undefined

//Si queremos acceder a propiedades más internas dentro de un objeto, es posible hacerlo siguiendo el mismo patrón.
const usuario4 = {
    nombre4: "John Doe",
    edad4: 32,
    telefono: {
        cel: 113334444,
        casa: null,
        trabajo: 113325555
    }
}
//Como teléfono es un objeto, desestructuramos la propiedad trabajo de éste, dentro de la desestructuración de usuario.
// Nótese que finalmente se terminan declarando dos variables, nombre y trabajo.

const { nombre4, telefono: { trabajo } } = usuario4

console.log(nombre4) // "John Doe"
console.log(trabajo) // 113325555


/* ALIAS - Desestructurarcion con un alias*/
//es decir declarar la variable con un nombre alternativo tras haber desestructurado el objeto.
//Esto lo hacemos simplemente con el operador : luego del nombre de la propiedad.
// En este caso desestructuramos todas las propiedades de item,
// pero lo almacenamos en variables denominadas id, nombre, precio, a través del alias que indicamos para cada una.

const item = {
    item_id: 432,
    product_name: "Some product",
    price_per_unit: 5600
}

const {
    item_id: id,
    product_name: nombre,
    price_per_unit: precio
} = item

console.log(id) // 432
console.log(nombre) // "Some product"
console.log(precio) // 5600

/* Desestructuración en parámetros */
//Desestructuramos por parametros porque nos interesa ciertos atributos de un objeto

const producto = {
    id: 10,
    nombre: "Curso Javascript",
    precio: 12500
}

function normal(item) {
    // desestructurando dentro del bloque
    const { id, nombre } = item
    console.log(id, nombre)
}

function desestructurar({ id, nombre }) {
    // desestructurando dentro del bloque
    console.log(id, nombre)
}
desestructurar(producto) // 10 Curso Javascrip

//En este caso capturando las posiciones x e y del objeto evento del click sobre la pantalla, mostrando esas posiciones por consola.
window.addEventListener('click', ( {x, y} ) => {
    console.log(x, y)
})

/* Desestructuración de arrays -    
Es posible desestructurar arrays de forma similar, usando corchetes [] en vez de llaves.
La diferencia con la desestructuración de objetos es que la de arrays es posicional. 
Es decir, declaramos las variables en orden y estas almacenan los valores de las mismas posiciones del array de referencia:
*/
const nombres = ["Juan", "Julieta", "Carlos", "Mariela"]

const [a, b] = nombres

console.log(a) // "Juan"
console.log(b) // "Julieta"

/*No funciona aquí la coincidencia por nombres, sino que se toman los valores según la posición.
Las dos primeras variables que declaramos tomarán los valores de los dos primeros elementos del array.

Si queremos acceder a otras posiciones, o mejor dicho omitir las primeras, podemos hacerlo dejando espacios vacíos con comas:
*/

const nombres1 = ["Juan", "Julieta", "Carlos", "Mariela"]

// omito las dos primeras posiciones
const [,, a1, b1] = nombres1

console.log(a1) // "Carlos"
console.log(b1) // "Mariela"