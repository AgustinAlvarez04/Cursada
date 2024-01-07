"use:strict"

/* Recordatorios de FUNCIONES FLECHA y FUNCIONES ANONIMAS 
//Funciones anonimas
const saludar = function(nombre){
    console.log(`Hola ${nombre}`);
    }
    saludar("Juan"); // Hola Juan
//Funciones flecha
const sumar = (x,y) => x+y;
console.log(sumar(2,3));  //5
*/

//Abstraccion - en mis palabras no saber como anda internamente pero si saber que hace
//Funciones de orden superior son las que dentro de una FUNCTION tiene como parametro otra FUNCTION

//ARROW FUNCTION
function mayorQue(n) {  //Definimos una funcion con un parametro 
    return (m) => { return m > n }   //Definimos otro parametro con FUNCION FLECHA que devuelve ambos parametros comparandolos
}
let mayorQueCinco = mayorQue(5) //Llamo mi funcion "mayorQue" dentro de mi variable "esMayor" con los parametros establecidos
/* Esto internamente se transforma en:
    function esMayor(m){
        return m > "5";
    }
*/
console.log(mayorQueCinco(15)) //True, es mayor que 5
console.log(mayorQueCinco(3)) //False, no es mayor que 5

//Recibir funcion por parametro
let array = [10,4,6,5,3,2]; //Declaro el array con el que voy a trabajar y..
console.log(array)  //Lo muestro por pantalla

function porCadaElemento(array, dato){ //Declaro una funcion que por parametro reciba un array y otra funcion
    for (const el of array) {   //Mediante for recorro el array elemento por elemento y..
        dato(el)    //Devuelve los elementos del array
    }
}

//Ejemplo N1
porCadaElemento(array,(elemento)=>{ //Pasamos la función por cada uno de los valores del array
    if(elemento>5){
        console.log(`${elemento} es mayor que 5`);
        }else{
            console.log(`${elemento} NO es mayor que 5`)
        }
})

//Ejemplo N2
porCadaElemento(array, (dato) => {  //Llamo la funcion dando por parametro un array y creo la funcion dato
    console.log(dato)   //Esto me devuelve todos los elementos del array..
}); //[10,4,6,5,3,2]

//Ejemplo N3
//Pasar funciones por parametros
let total = 0;  //Declaro una funcion que sirve para guardar la suma de los num dentro del array
porCadaElemento(array, (dato) => {  //Por cada elemento dentro del array..
    total += dato   //Se sume dentro de total
})
console.log(total)  //Devuelve por consola la suma de los numeros adentro del array = 30

/* METODOS DE BUSQUEDA Y TRANSFORMACION */

//METODO FOREACH - Recorre los elementos del array
array.forEach((elemento) => {            //Muestra todos los elementos del array
    console.log(elemento);
});
array.forEach((elemento, indice) => {
    console.log("Elemento; " + elemento + " Indice: " + indice);    //Muestra el elemento y el indice de ese elemento en el array
});
array.forEach((elemento, indice) => {
    array[indice] = elemento + 2;    //Muestra una suma de los elementos originales + 2
});
console.log(array);

//METODO FIND - Evalua una condicion determinada por cada elemento del array y devuelve el primero que encuentre
const cursos = [
    { nombre: "Python", precio: 20000 },
    { nombre: "Django", precio: 25000 },
    { nombre: "JavaScript", precio: 30000 },
    { nombre: "ReactJs", precio: 35000 },
]
let precio = Number(prompt("Ingrese precio: "))
console.log(cursos.find((elemento) => {
    return elemento.precio > precio;
}))

//METODO FILTER - Evalua una condicion determinada por cada elemento del array y devuelve todos los que cumplen la condicion
precio = Number(prompt("Ingrese precio: "))
console.log(cursos.filter((elemento) => {
    return elemento.precio > precio;
}))

//METODO SOME - Evalua una condicion determinada por cada elemento del array y devuelve TRUE o FALSE
precio = Number(prompt("Ingrese precio: "))
console.log(cursos.some((elemento) => {
    return elemento.precio > precio;
}))

//METODO MAP - Nos devuelve un nuevo array con nuestras condiciones
let informacion = cursos.map((elemento) => {
    return { curso: elemento.nombre, precio: elemento.precio + 10}
})
console.log(informacion)

//METODO REDUCE - Reduce el array a uno solo valor
let reducido = cursos.reduce((acumulador, elemento) => { //Recibe dos parametros
    acumulador += elemento.precio       //Parametro elemento recorre el array
    return acumulador   //Parametro acumulador junta el elemento seleccionado del array, en este caso el precio
},0)    //Segundo parametro - El 0 es el valor inicial del acumulador
console.log(reducido)   //Devuelve la suma de todos los precios de nuestro array

//METODO SORT - Ordena un array en la misma variable (METODO DESTRUCTIVO) segun los parametros que pasemos
const numeros = [1,2,3,4,5]
numeros.sort((a, b) => a - b);
console.log(numeros)
numeros.sort((a, b) => b - a);
console.log(numeros)

//Tambien funciona con strings
const apellidos = [
    { apellido: "Alvarez"},
    { apellido: "Martinez"},
]
apellidos.sort((a, b) => {
    if (a.apellido > b.apellido){
        return 1;
    }
    if (a.apellido < b.apellido){
        return -1;
    }
    // a es igual a b
    return 0;
})
console.log(apellidos)

    










