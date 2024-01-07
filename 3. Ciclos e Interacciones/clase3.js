"use:strict";
/* 
    Ciclos por Conteo "FOR"
    Repiten un bloque de codigo una cantidad de veces especifica.
    for(desde; hasta; actualizacion)
        Codigo a repetir
    posicion = posicion + 1
    posicion += 1
    posicion++ siempre es 1
    ambos son equivalentes 
*/

let posicion;
console.log("posicion = posicion + Numero")
for(posicion = 0; posicion <= 10; posicion = posicion + 8){
    console.log(posicion);
}
console.log("posicion += Numero")
for(posicion = 0; posicion <= 10; posicion += 5){
    console.log(posicion);
}
console.log("posicion++ siempre es 1")
for(posicion = 0; posicion <= 10; posicion++){
    console.log(posicion);
}

// Ejercicios Tablas

let numero = Number(prompt("Ingrese un numero para averiguar la tabla del 0 al 10: "));
let i;
for(i = 0; i <= 10; i++){
    console.log(i + " X " + numero + " = " + i*numero);
}
let numero1 = Number(prompt("Ingrese un numero para averiguar la tabla del 0 al 10: "));
let j;
for(j = 0; j <= 10; j++){
    if (j == 5){
        continue; // Continue salta una linea de codigo, en este caso la tabla del 5
    }
    console.log(j + " X " + numero1 + " = " + j*numero1);
}
let numero2 = Number(prompt("Ingrese un numero para averiguar la tabla del 0 al 10: "));
let k;
for(k = 0; k <= 10; k++){
    if (k == 5){
        break; // Break rompe el for y lo termina, en este caso cuando llegue al 5
    }
    console.log(k + " X " + numero2 + " = " + k*numero2);
}

/* Ciclos por Condicinales "WHILE" y "DO WHILE"
  Repite un bloque de codigo mientras la condicion evaluada es verdadera. 
  Si la condicion se cumple siempre el programa entra en bucle, asegurarse de repétir la condicion y darle paso a que se rompa
*/

// Ejercicio de promedios con WHILE

let cantAlumnos = 0     // variable para guardar los alumnos
let acumulador = 0      // variable donde se guardan las notas por alumno
let condicion = Number(prompt("Ingrese alumno o ingrese 'no' para seguir al promedio:"));       // Prompt para ingresar alumnos
while(condicion != 'no'){       //Condicional que inicia el programa
    cantAlumnos++       //Se suma un alumno a cantAlumnos cada que se muestre la variable condicion mediante prompt
    let nota = Number(prompt("Ingrese nota del 1 al 10"));      //Pregunta el valor y guarda la nota
    acumulador = acumulador + nota      //Envia a la variable acumulador ambos datos, de la nota y la cantidad de alumnos
    condicion = prompt("ingrese otro alumno o ponga no para salir")     //Prompt para salir del condicional-bucle
}               //Fin del while
let promedio = acumulador/cantAlumnos       //Variable para calcular el promedio dividiendo el acumulador que contiene nota y alumno con la cantidad de alumnos
alert(promedio)         //Muestro por pantalla el promedio

//Mismo Ejercicio pero con DO WHILE
//Este programa primero ejecuta y luego pregunta

let cantAlumnos1 = 0
let acumulador1 = 0
let condicion1
do {
    cantAlumnos1++
    let nota = Number(prompt("Ingrese nota del 1 al 10"));
    acumulador1 = acumulador1 + nota
    condicion1 = prompt("ingrese otro alumno o ponga no para salir")
} while (condicion1 != "no")

let promedio1 = acumulador/cantAlumnos
alert(promedio1)

//SWITCH

let cifra = 6;
switch(cifra) {
    case 4:
        console.log("El numero es 4");
        break;
    case 5:
        console.log("El numero es 5");
        break;
    case 6:
        console.log("El numero es 6");
        break;
    case 7:
        console.log("El numero es 7");
        break;
    case 8:
        console.log("El numero es 8");
        break;
    default:
        console.log("El numero no es del 4 al 8")
        break;
}

// Actividad de adivinanzas: adivinar el numero preseteado, 10 intentos, a los 5 ganas.

let numPreseteado = 4       //Numero ganador
let vidas = 5           //Vidas con las que contamos
let numIngresado;       // Variable que guarda el numero ignresado
do {            // Condicional
    alert("vidas: " + vidas);          // Mensaje alert con la cantidad de vidas restantes
    vidas--;            // Si no adivinas el numero, se resta una vida de las 5 que tenemos
    numIngresado = Number(prompt("Ingrese un numero: ")); // Ingresar numero
} while (numIngresado != numPreseteado && vidas > 0);       // Condicional, numIngresado distinto a numPreseteado y vidas mayor a 0
if (numIngresado == numPreseteado) {        // Si los numeros coinciden, GANASTE
    alert("GANASTE");
}else {             // Si los numeros no coinciden, PERDISTE
    alert("AGOTASTE TODAS TUS VIDAS")
}
