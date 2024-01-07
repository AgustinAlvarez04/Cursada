class Persona {
    constructor(nombre, edad, calle){
        this.nombre = nombre;
        this.edad = edad;
        this.calle = calle;
    }
    saludar() {
        console.log("Hola soy una clase y me llamo: " + this.nombre);
    }
}