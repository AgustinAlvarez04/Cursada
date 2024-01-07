"use:strict"

let nombre = "Agustin";
let edad = 20;
let calle = "San martin";

//Objeto literal
const persona1 = {
    nombre: "Agustin",
    edad: 20,
    calle: "San Martin",
};
let atributo = prompt("Ingresar atributo: ")
console.log(persona1[atributo]) //Muestra atributo seleccionado por consola
console.log(persona1); //muestra el objeto completo en consola
//Acceder a los valores de un Objeto
console.log(`${persona1.nombre} vive en ${persona1.calle}`); //muestra solo el valor
//Modificar o actualizar los valores del Objeto
persona1.edad +=5;
console.log(persona1);
//Eliminar propiedades de un Objeto
delete persona1.calle;
console.log(persona1);

// Funcion constructora - "En lo personal no usar este metodo, palabras del profe"
function Persona(nombre, edad, calle){   //this. se utilizara para referirnos al parametro vacio de la funcion
    this.nombre = nombre;
    this.edad = edad;
    this.calle = calle;
}
const instanciaPersona = new Persona("Camila", 21, "Av.Monroe")
console.log(`${instanciaPersona.nombre} vive en ${instanciaPersona.calle}`)

function Persona2(nombre, edad, calle) {   //this. se utilizara para referirnos al parametro vacio de la funcion
    this.nombre = nombre;
    this.edad = edad;
    this.calle = calle;

    this.saludar = () => {
        alert("Hola mi nombre es: " + this.nombre);
    };
}
const instanciaPersona2 = new Persona2("Camila", 21, "Av.Monroe")
const instanciaPersona3 = new Persona2("Agustin", 20, "Av.San Martin")
//instanciaPersona2.saludar();
//instanciaPersona3.saludar();

//Operador IN - IN es un booleano osea Devuelve verdadero o falso 
console.log("edad" in instanciaPersona2);
console.log("altura" in instanciaPersona3);
//Operador FOR IN
let propiedad;
for(propiedad in instanciaPersona2){
    console.log("Atributo: " + propiedad)
    console.log(instanciaPersona2[propiedad])
}

//Class - Clases en js - archivo donde se almacenan las clases "personaclass.js"
const instanciaPersona4 = new Persona("Federico", 21, "Av.Monroe")
const instanciaPersona5 = new Persona("Joel", 20, "Av.San Martin")
instanciaPersona4.saludar();
instanciaPersona5.saludar();


const miCuenta = new CuentaBancaria("Agustin", "040803", 300, 200); //titular, contacto, saldo, limite

console.log(miCuenta.saldo)
miCuenta.extraer(200);
console.log(miCuenta.saldo)
miCuenta.depositar(500);
console.log(miCuenta.saldo)
miCuenta.extraer(-200000);
