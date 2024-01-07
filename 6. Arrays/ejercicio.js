"use:strict"

let notas = []   //Variable donde guardaremos las notas ingresadas
let opcion = Number(prompt("Ingrese una opcion: \n0 - Salir\n1 - Ingresar Nota\n2 - Calcular Promedio"))    //Solicitar accion
while (opcion != 0) {       //Condicional
    switch (opcion) {          //Opciones
        case 0:                  //Terminar programa
            alert("Programa terminado!")
            break;
        case 1:                     //Pedir nota al usuario
            let nota = Number(prompt("Ingrese la nota de un alumno: "));   //Ingresar nota
            notas.push(nota);           //La nota ingresada se PUSHEA (se agrega) a la variable NOTAS
            break;      
        case 2:                     //Calcular promedio de notas anteriormente ingresadas
            let sumatoria = 0       //Declaramos la variable y la establecemos en 0
            for (i = 0; i < notas.length; i++) { //FOR que recorre las notas y las guarda en sumatoria
                sumatoria += notas[i]       //Suma el valor agregado en cada NOTA ingresada
            }
            alert("El promedio es igual a " + sumatoria / notas.length); //Formula para sacar promedio
            break;
        default:
            alert("Ingresaste algo mal!");
    };
    opcion = Number(prompt("Ingrese una opcion: \n0 - Salir\n1 - Ingresar Nota\n2 - Calcular Promedio"));
};