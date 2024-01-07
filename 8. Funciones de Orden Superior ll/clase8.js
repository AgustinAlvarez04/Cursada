"use:strict"

//Objeto MATH
console.log(Math.E) //2.718281828459045
console.log(Math.PI) //3.141592653589793

//Propiedades MATH

//Devuelve el mayor numero del listado
console.log(Math.max(51, 20, 45, 68, 13))
console.log(Math.max(51, 20, Infinity, 68, 13))

//Devuelve el menor numero del listado
console.log(Math.min(10, 19, 33, 70, 5))
console.log(Math.min(10, -19, -Infinity, 70, 5))

//Devuelve el numero entero mas proximo hacia abajo
console.log(Math.floor(Math.PI))
console.log(Math.floor(Math.E))

//Devuelve el numero entero mas proximo hacia arriba
console.log(Math.ceil(Math.PI))
console.log(Math.ceil(Math.E))

//Redondea un decimal a la cifra mas cercana
console.log(Math.round(Math.PI))
console.log(Math.round(Math.E))

//Raiz cuadrada - Square Root
console.log(Math.sqrt(16))
console.log(Math.sqrt(-1))

//Random - Numero aleatorio entre 0 y 100 - Multiplicamos para setear desde el 0 hasta el numero que ingresemos
let random = Math.random() * 100;
console.log("Numero aleatorio entre 1 y 100 es : "+random);

//Generador de numeros 
let numAleatorios = [];
for (let i=0 ; i<1 ; i++){
    let num = Math.floor(Math.random()*100);
    console.log(`Numeros aleatorios : ${num}`);
    numAleatorios[i] = num;
    }


//Clase DATE - Crea fechas y es posible manupularlas

console.log(new Date) //Fecha en este instante
//Creamos una fecha por parametros: año, mes, dia, hora, minutos, segundos, milisegundos. MESES DE 0 A 11.
console.log(new Date(2003, 3, 8, 15, 0, 0))

let nacimiento = new Date(2003, 3, 8, 15, 0, 0)
console.log(nacimiento.getFullYear()) //Devuelve el año creado
console.log(nacimiento.getMonth())  //Devuelve el number que representa el mes = Enero (0) y Diciembre (11)
console.log(nacimiento.getDay())    //Devuelve el number que representa el dia Lunes(1) y Domingo (7)

//Distintas formas de representar el dia
const hoy = new Date("November 28, 2023")
console.log(hoy.toDateString())
console.log(hoy.toLocaleString())
console.log(hoy.toLocaleDateString())
console.log(hoy.toTimeString())

//Diferencia entre dias
                            // *segundos *minutos *horas *dias *meses *dias del año
console.log((hoy - nacimiento)/1000 /60 /60 /24 /365)










