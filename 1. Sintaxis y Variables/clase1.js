"use:strict;" //no necesario, siempre que tenga buenas practicas, funciona para q las variables esten con la palabra reservada LET

console.log("Holaaa mis primeros pasitos jijij") //cosas para mostrar en consola, para nosotros u otros programadores

let variable = "Aca va un dato que se guardara en la variable."

let variable2
variable2 = "Asi tambien se puede usar una variable, declararla y posteriormente agregar informacion."

let numero = 21
let Numero = 21
// son dos variables diferentes, con el mismo valor, son diferentes por el Case Sensitive(mayusculas - minisculas)

const pi = 3.141632 //no es posible cambiar su contenido

//matematicas como en python
let operacion = 31+12-31 
console.log(operacion)

let numero0 = 90
console.log(numero0*2)

let numero1 = 51
let numero2 = 40
console.log(numero1-numero2)

console.log(numero2+pi)

//concatenar cadenas
let nombre = "Mi nombre es Agustin "
let apellido = "Alvarez"
let edad = 20
console.log(nombre+apellido)
console.log("Y tengo " + edad + " años")

//Ejercicio en clase

alert("Conoscamosnos")
let nombreUser = prompt("Ingrese su nombre: ")
let apellidoUser = prompt("Ingrese su apellido: ")
let saludar = nombreUser + " " + apellidoUser
alert("Hola " + saludar + " te propongo realizar algunas sumas")

alert("Sumas")
let num1 = parseInt(prompt("Ingrese numero: "))
let num2 = parseInt(prompt("Ingrese numero 2: "))
let res = num1 + num2
alert("Resultado = " + res)

alert("Sumas con decimales")
let num3 = parseFloat(prompt("Ingrese numero decimal: "))
let num4 = parseFloat(prompt("Ingrese numero decimal 2: "))
let res1 = num3 + num4
alert("Resultado = " + res1)

alert("Sumas enteros y decimales")
let num5 = parseFloat(prompt("Ingrese numero decimal: "))
let num6 = parseInt(prompt("Ingrese numero entero: "))
let res2 = num5 + num6
alert("Resultado = " + res2)


// shift + Win + S = seleccionar a que sacarle captura

