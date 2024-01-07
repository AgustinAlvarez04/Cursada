"use:strict"

// Arrays
let arr = []
let array1 = [1, 2, "yo soy ", 4, "agustin"];
let array2 = [1, "Hola", 3.2, true, 5, false,["Hola denuevo", 3, 4]];

//Formas de llamar un array
console.log(array2[0])
console.log(array2[6][1])
console.log(array2[0] + array[1])

//El array se puede recorrer mediante un for, cuando llega a su longitud corta
console.log(array2.length) //Imprime 7 porque empieza a contar desde 1 y no desde 0

//Si sabemos su longitud podemos ponerla manualmente
let recorrido;
for (recorrido = 0; recorrido <=6; recorrido++) { 
    console.log(array2[recorrido]);
}
//Si no la sabemos podemos crear el mismo ciclo y preguntar por su longitud con "menor estricto <"
let recorrido2;
for (recorrido2 = 0; recorrido2 < array2.length; recorrido2++) { 
    console.log(array2[recorrido]);
}

// METODOS DESTRUCTIVOS - MODIFICAN EL ARRAY
let juegos = ["Gta", "Tlo2", "Apex", "Fornite"]
//Como agregar un elemento al INICIO del array?? Metodo UNSHIFT
console.log(juegos)
juegos.unshift("CamiInicio")
//Como agregar un elemento al FINAL del array?? Metodo PUSH
console.log(juegos)
juegos.push("CamiFinal")
//Como eliminar el PRIMER elemento del array?? Metodo SHIFT - no es necesario poner un parametro
juegos.shift()
console.log(juegos)
//Como eliminar el ULTIMO elemento del array?? Metodo POP - no es necesario poner un parametro
juegos.pop()
console.log(juegos)
//Como eliminar un elemento en CUALQUIER POSICION del array?? Metodo SPLICE - (Inicio, Cuantos elementos eliminar)
juegos.splice(1,1)
console.log(juegos)

// METODOS NO DESTRUCTIVOS - NO MODIFICAN EL ARRAY
let Mapas = ["San Andreas", "Vice City", "Olympus", "Word Edge"]
//Metodo JOIN - Convierte el array en un string mediante el caracter que solicitemos
console.log(Mapas)
console.log(Mapas.join(", "))
//Metodo CONCAT - Concatena dos arrays
let Mapas2 = ["Liberty City", "Los Santos", "Kings Cañon", "Brooken Moon"]
console.log(Mapas.concat(Mapas2))
//Metodo SLICE - Devuelve una copia de una parte del array dentro de un nuevo array
let MapsGta = Mapas.slice(0,2)
console.log(MapsGta)
MapsGta = Mapas.slice(0,2).concat(Mapas2.slice(0,2))
console.log(MapsGta)
//Metodo INDEXOF - Nos permite ver el indice de un elemento del array
console.log(MapsGta.indexOf("San Andreas"))
console.log(MapsGta.indexOf("Los Santos"))
//Metodo INCLUDES - Nos permite ver si el elemento que ingreso por aprametro existe o no en el array
console.log(MapsGta.includes("Los Santos"))
console.log(MapsGta.includes("NY"))
//Metodo REVERSE - Da vuelta el array - METODO DESTRUCTIVO ALTERA EL ORDEN DEL ARRAY
MapsGta.reverse()
console.log(MapsGta)  //console.log(MapsGta.reverse())


//ARRAYS DE OBJETOS - Estructuras complejas de datos
const objeto = {id:0, producto:"Apex Legends"}; 
const array = [objeto, {id:1, producto:"Dying Light 2"}]
array.push({id:2, producto:"Call Of Duty"})
console.log(array[2].producto)
for(const producto of array){
    console.log(producto.id)
    console.log(producto.producto)
}

let producto;
const datos = [
    { id:1 ,nombre:"Apex Legends",nombreCorto:"Apex"},
    { id:2 ,nombre:"Dying Light 2",nombreCorto:"Dy2"},
    { id:3 ,nombre:"Call Of Duty",nombreCorto:"Cod"},
]
for(producto of datos){
    console.log(producto.nombre)
    console.log(producto.nombreCorto)
}



