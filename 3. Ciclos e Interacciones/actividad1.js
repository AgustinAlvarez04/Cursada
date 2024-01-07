"use:strict"
/*
//Pedir numero mediante "prompt" y sumarle otro en cada repeticion, realizando una salida por cada resultado
let num1 = prompt("Ingrese un número"); //Pido el numero
num1 = parseInt(num1);  //Lo guardo en una variable
for (let i=0;i<10;i++){
    let num2 = prompt("Ingrese otro número para sumar ");
    num2 = parseInt(num2);
    console.log(`La suma de ${num1} + ${num2} es ${num1+num2}`);
    num1 += num2;
    }

*/
/* Pedir un texto mediante "prompt", concatenar un valoren cada repeticion, realizando una salida en cada resultado
hasta ingresar "ESC" */
let txt = prompt("Ingrese algo: ")
while (txt !== "ESC"){
    let texto = prompt("Ingrese algo para concatenar: ")
    texto = texto
    console.log(`${txt+texto}`);

}

//Pedir un numero mediante "prompt" repetir la salida del mensaje "hola" la cantidad de veces ingresdada*/
let n = prompt("¿cuantas veces quieres que se muestre 'Hola'?");
n = parseInt(n);
for (let i=0 ; i<n ; i++) {
    console.log('Hola')
    }




