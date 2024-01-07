"use:strict";

alert("Mensaje fuera del condicional (if)");
if (true) {
    alert("Soy un condicional IF verdadero");
}
alert("Post-Mensaje fuera del condicional (if)");

alert("Mensaje fuera del condicional (if)");
if (false) {
    alert("Soy un condicional IF verdadero");
}
alert("Post-Mensaje fuera del condicional (if-false)");

// con variables
let condicional = true
alert("Mensaje fuera del condicional (if)");
if (condicional) {
    alert("Soy una variable condicional IF verdadero");
}
alert("Post-Mensaje fuera del condicional (if)");

let condicion = false
alert("Mensaje fuera del condicional (if)");
if (condicional) {
    alert("Soy una variable condicional IF false");
}
alert("Post-Mensaje fuera del condicional (if-false)");

// comparacion en condicionales
alert("Comparemos numeros!");
let valor = parseInt(prompt("Ingrese un numero: "))
let valor0 = parseInt(prompt("Ingrese un segundo numero: "))
if (valor == valor0) {
    alert("Ambos numeros son iguales!");
}else {
    alert("Los valores son distintos")
}

alert("Comparemos numeros!");
let valor1 = parseInt(prompt("Ingrese un numero: "));
let valor2 = parseInt(prompt("Ingrese un segundo numero: "));
let comparacion = valor1 == valor2
if (comparacion) {
    alert("Ambos numeros son iguales!");
}else {
    alert("Los valores son distintos");
}

// if - else if - else
let juego = 16000

if (juego < 900){
    console.log("El presupuesto alcanza para comprarlo");
}else if (juego < 3600){
    console.log("Todavia podemos permitirnos el gusto.. pero se pone bravo");
}else if (juego < 7200){
    console.log("En verdad es muy necesario comprar este juego?");
}else if (juego <= 16000){
    console.log("Se nos esta yendo de las manos el vicio");
}else {
    console.log("El juego debe de estar en steam, incomprable");
}

// Operadores en JS
console.log(1 < "1");       //Es menor que
console.log(1 > "1");       //Es mayor que
console.log(1 <= "1");       //Es menor o igual que
console.log(1 >= "1");       //Es mayor o igual que
console.log(1 == "1");       //Es Igual
console.log(1 === "1");      //Es estrictamente igual
console.log(1 != "1");       //Es distinto
console.log(1 !== "1");      //Es estrictamente distinto

let nombre = prompt("Ingrese Nombre: ");
let apellido = prompt("Ingrese Apellido: ");
if (nombre != "" && apellido != ""){                     // Operador AND (y) &&
    alert("Buenos dias " + nombre + " " + apellido);
}else {
    alert("Datos invalidos")
}

let nombre1 = prompt("Ingrese Nombre: ");
let apellido1 = prompt("Ingrese Apellido: ");
if ((nombre1 != "") || (apellido1 != "")){                // Operador OR (o) ||    
    alert("Buenos dias " + nombre1 + " " + apellido1);    
}else {
    alert("Datos invalidos")
}

let nombre2 = prompt("Ingrese Nombre: ");
let apellido2 = prompt("Ingrese Apellido: ");
if ((nombre1 != "") || (apellido1 != "")){                 // Operador NOT (no) !
    alert("Buenos dias " + nombre1 + " " + apellido1);    
}else {
    alert("Datos invalidos")
}

// Ejercicio en clase
let text = prompt("Saludame!")
if (text == "hola"){
    console.log("Superaste la prueba")
}
let num = Number(prompt("Ingrese un numero: "))
if (num > 1000){
    alert("Numero mayor a 1000")
}else {
    alert("Dato valido")
}

let num2 = Number(prompt("Ingrese numero del 1 al 100: "))
if (num2 >= 10 && num2 <=50){
    alert("Numero mayor o igual a 10 y menor o igual a 50")
}else{
    alert("Numero ingresado")
}




