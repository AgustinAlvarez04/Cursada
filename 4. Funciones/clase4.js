"use:strict";

// Ventajas de utilizar funciones
/* Evita instrucciones duplicadas (Principio DRY)- Soluciona un problema complejo usando tareas sencillas(Principio KISS)
Focaliza tareas prioritarias para el programa (Principio YAGNI) - Aporta orden, entendimiento al codigo, facilidad y rapidez para hacer modificaciones */

// Function con un solo parametro
function saludo(mensaje){
    alert(mensaje);
}
saludo("Hola")
saludo("Soy una function")
saludo("Que te saluda") 

// Function con dos parametro
function suma(num1, num2){
    let resultado = num1 + num2
    alert(resultado)
}
suma(100, 20)
suma(20, 50)

// Ejercicio funcion para solicitar un dato al usuario
// isNaN es una funcion que dice si es NaN o no
function ingresarNumero(){  //Creo la funcion
    let numero = Number(prompt("Ingrese un numero: "))  //Solicito al usuario que ingrese un numero y lo almaceno en "numero"
    while(isNaN(numero)){       //While creado para que si el usuario no ingresa un numero, no salga NaN por el alert
        alert("No ingresaste un numero! volve a intentarlo") //Notifica al usuario que no ingreso un numero
        numero = Number(prompt("Ingrese un numero: ")) //Vuelve a solicitar un numero, si ingresa un Number la condicion se cumple y sigue con el programa
    }
    return numero;  //Devuelvo el numero
}
let num = ingresarNumero(); //Variable creada para asignarle los numeros que provienen de la funcion
let num0 = ingresarNumero(); //Se puede llamar en cualquier parte del codigo
let num1 = ingresarNumero(); //Y sumarlos cuando los llamamos
alert(num + num0 + num1) //Muestro por pantalla el numero ingresado por el usuario mediante la function

/* Scope de una variable es la zona en la cual se define, el contexto al que pertenece la misma dentro del algoritmo,
    restringiendo su uso y alcance. JS tiene dos ambitos, global y local.
    Las variagles globales se pueden usar en todo el programa.
    Las variables locales son las que residen en las funciones, for, while, do-while entre otros, estas no se pueden usar en el
    ambito global. Son exclusivas para el ambito local.
    Los parametros de las FUNCTION solo existen en la funcion, fuera de ella no existen.
*/

let global = "Soy una variable global"
console.log(global)
// console.log(local) Esto da error porque las variables no se pueden utilizar desde local a global.
function ingresarNumero(){
    let numero = Number(prompt("Ingrese un numero: "))
    console.log(global)
    let local = "Soy una variable local"
    console.log(local)
    while(isNaN(numero)){
        alert("No ingresaste un numero! volve a intentarlo")
        numero = Number(prompt("Ingrese un numero: "))
    }
    return numero;
}
let nume = ingresarNumero()
let nume1 = ingresarNumero()
alert(nume + nume1)


/* Funciones Anonimas*/
// Podemos crear una FUNCTION sin nombre pero guardarla en una constante o una variable y utilizarla de igual manera

const suma = function (a, b) {
    return a + b;
};
const resta = function (a, b) {
    return a - b;
};
const multiplicacion = function (a, b) {
    return a * b;
};

console.log(suma(10, 20))
console.log(resta(10, 20))
console.log(multiplicacion(10, 20))

/* Funciones Flechas*/
// En las funciones flechas si la funcion tiene solo una sentencia return se la puede resumir asi

const suma1 =(a, b) => a + b;
const resta1 =(a, b) => a + b;
const multiplicacion1 = (a, b) => a + b;

console.log(suma1(10, 20))
console.log(resta1(10, 20))
console.log(multiplicacion1(10, 20))
