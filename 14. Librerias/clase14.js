"use:strict"

/* Librerias es un conjunto de herramientas (codigos) que nos facilitara nuestro desempeño a la hora de programar

Las librerias van ubicadas en el sector HEAD del html.

Para utilizarlas podemos descargarlas o llamarla desde internet y referenciarlas mediante " src="" ".

Los archivos se comprimen en un "min.js" para que sea mas facil leerlo en un navegador, para saber como funcionan estos tenemos
que leer su libreria correspondiente.

*/

/* Sweet Alert - Libreria */

// Swal.fire({
//     title: "Good job!",
//     text: "You clicked the button!",
//     icon: "success"
//   });

// Swal.fire({   //Sentencia para crear el alert
//     timer: 1000,        //Taimea el tiempo que aparece el alert en pantalla
//     timerProgressBar: true      //Agrega una barra de carga en el alert de arriba
//   });

let btn = document.getElementById("btn")

btn.addEventListener('click', () => {
   
    Swal.fire({
        title: 'Está seguro de eliminar el producto?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sí, seguro',
        cancelButtonText: 'No, no quiero'
    }).then((result) => {           //Promesa. Encadena una funcion con otra.

        if (result.isConfirmed) {
            Swal.fire({
                title: 'Borrado!',
                icon: 'success',
                text: 'El archivo ha sido borrado'
            })
        }
    })
})

/* Toastify - Libreria*/
let btn2 = document.getElementById("btn2")

//Toastify para redireccionamiento
btn2.addEventListener('click', () => {
   
    Toastify({
        text: "Click aquí para ir a Coder!",
        duration: 3000,
        destination: 'https://www.coderhouse.com'
    }).showToast();
})

/* Toastify define un callback que se ejecuta al clickear el toast.
btn.addEventListener('click', () => {
   
    Toastify({
        text: "Probando toast!",
        duration: 3000,
        onClick: () => {
           
            Toastify({
                text: 'Clickeaste un Toast!',
                duration: 1500,
                position: 'left'
            }).showToast()
        }
    }).showToast();
})
*/

/* Toastify personalizadoa  nuestro justo
Toastify({
    text: "Probando toast!",
    duration: 3000,
    gravity: 'bottom',
    position: 'left',
    className: 'notificacion my-toast'
}).showToast();
*/

/* Luxon - Libreria */

/* USOS */

//La clase principal en luxon es DateTime, podemos referenciarla en una variable global para facilitar su acceso:
const DateTime = luxon.DateTime

const dt = DateTime.local(2022, 1, 25, 12, 10)
// 25 / 01 / 2022 - 12:10hs


/*Podemos crear un objeto de fecha con la fecha actual a través de DateTime.now(),
que es equivalente a llamar a DateTime.local() sin argumentos.
También podemos crear fechas a través de un objeto, pasando las distintas características por propiedades y valores:
*/

const dt1 = DateTime.fromObject(
    { day: 22, hour: 12, month: 2 },
    { zone: 'America/Buenos_Aires', numberingSystem: 'beng' }
)
console.log( dt.toString() )
// 2022-02-22T12:00:00.000-03:00

/*  Vemos que el método fromObject recibe dos objetos por parámetro. 
El primero donde definimos numéricamente la fecha y hora, y el segundo donde aclaramos la zona horaria y el tipo de numeración.
También podemos crear fechas a partir de un string siguiendo la norma ISO, con el método fromISO:
*/

DateTime.fromISO("2017-05-15")          //=> May 15, 2017 at midnight
DateTime.fromISO("2017-05-15T08:30:00") //=> May 15, 2017 at 8:30


//Accediendo a las fechas
/* Algo que sí queremos es recuperar la fecha como string, y para eso aplicamos el método .toString() al objeto creado: */

const now = DateTime.now()  //Crea la fecha actual de cuando se la utiliza
console.log( now.toString() )
// 2022-01-25T12:31:00.775-03:00


/* Podemos acceder a los distintos componentes de la fecha creada a través de propiedades específicas: */
const dt3 = DateTime.now();
dt.year    //=> 2022
dt.month   //=> 1
dt.day     //=> 25
dt.second  //=> 22
dt.weekday //=> 2

const dt4 = DateTime.now();

console.log( dt.zoneName ) // America/Buenos_Aires
console.log( dt.daysInMonth ) // 31


//FORMATEAR LA FECHA


/* Propiedades
Nombre                  Descripción                                             Ejemplo

DATE_SHORT              Fecha corta                                             14/10/1993

DATE_MED                Fecha abreviada                                         Oct 14, 1983

DATE_MED_WITH_WEEKDAY   Fecha abreviada con día de la semana abreviado          Frid, Oct 14, 1983

DATE_FULL               Fecha completa                                          October 14,1983

DATE_HUGE               Fecha completa con día de la semana completo            Friday, October 14, 1983

*/

/* USOS */

const dt5 = DateTime.now();

dt.toLocaleString()  // 25/1/2022
dt.toLocaleString(DateTime.DATE_FULL)  // 25 de enero de 2022
dt.toLocaleString(DateTime.TIME_SIMPLE)  // 12:51

dt.setLocale('en').toLocaleString(DateTime.DATE_FULL)  
// January 25, 2022

//LA CLASE DURATION

/* La clase Duration representa una cantidad de tiempo, como puede ser “3 horas y 15 minutos”. 
Se crea a través del método .fromObject enviando un objeto con las características deseadas. 
Se puede sumar o restar a un objeto DateTime, y también tiene sus propios getters:
 */

const Duration = luxon.Duration

const dt6 = DateTime.now();
const dur = Duration.fromObject({ hours: 3, minutes: 15 });

console.log( dur.hours ) // 3
console.log( dur.minutes ) // 15
console.log( dur.seconds ) // 0

console.log( dt.toLocaleString(DateTime.DATETIME_SHORT) )
//  25/1/2022 14:35

const suma = dt.plus(dur)
console.log(suma.toLocaleString(DateTime.DATETIME_SHORT))
// 25/1/2022 17:50

const resta = dt.minus(dur)
console.log(resta.toLocaleString(DateTime.DATETIME_SHORT))
// 25/1/2022 11:20


//INTERVAL

/* De forma similar podemos trabajar la clase Interval, que con su constructor podemos enviar dos fechas y
 nos devuelve el intervalo entre ellas, pudiendo acceder para realizar los cálculos que necesitemos.
*/

const Interval = luxon.Interval

const now2 = DateTime.now()
const later = DateTime.local(2022, 1, 26)
const i = Interval.fromDateTimes(now, later)

console.log( i.length('days') ) // 0.3905736111111111
console.log( i.length('hours') ) // 9.373766666666667
console.log( i.length('minutes') ) // 562.426