"use:strict"

/* new Productos(new Item("Leche", 240), 700)  //Cree un class Item ADENTRO de un class Productos - ahora puedo guardarlo en stock*/
let stock = [
    new Productos(new Item("Leche", 240), 700),
    new Productos(new Item("Avena", 100), 40),
    new Productos(new Item("Chocolate", 300), 1000),
    new Productos(new Item("Azucar", 200), 500),
]

let carrito = []

function ingresarNumero(mensaje) {
    let num = Number(prompt(mensaje));
    while (isNaN(num)) {
        num = Number(prompt(mensaje));
    }
    return num;
}

function busquedaCarrito(buscar) {
    let indice = carrito.findIndex((elemento) => {
        return elemento.producto.nombre === buscar;         //Si no lo encuentra devuelve -1
    });
    return indice;
}

function busquedaStock(buscar) {
    let indice = stock.findIndex((elemento) => {
        return elemento.producto.nombre === buscar;         //Si no lo encuentra devuelve -1
    });
    return indice;
}

function comprar() {
    let buscar = prompt("Ingrese nombre del producto: ")
    let indiceBusqueda = busquedaStock(buscar)
    if (indiceBusqueda == -1) {
        alert("No existe este producto")
    } else {
        let cantidad = ingresarNumero("Ingrese la cantidad que desea comprar: ")
        let respuesta = stock[indiceBusqueda].quitarElemento(cantidad)
        if (respuesta != null) {
            let indiceCarrito = busquedaCarrito(buscar)
            if (indiceCarrito == -1) {
                carrito.push(new Productos(respuesta, cantidad));  //Si NO esta lo crea y le pongo la cantidad
            } else {  //Si esta le sumo la cantidad
                carrito[indiceCarrito].agregarElemento(cantidad);
            }
        } else {
            alert("No hay stock de este producto")
        }
    }
}

let opcion = ingresarNumero(
    "Ingrese opcion: \n1- Agregar producto \n2- Eliminar producto \n3- Hacer Chechout \n4- Salir"
)

while (opcion != 5) {
    switch (opcion) {
        case 1:
            console.log(stock)
            comprar()
            console.log(carrito)
            console.log(stock)
            break;
        case 2:
            eliminar()
            break;
        case 3:
            checkout()
            break;
        case 4:
            mostrar()
            break;
        default:
            alert("Opcion invalida!")
    }
    opcion = ingresarNumero(
        "Ingrese opcion: \n1- Agregar producto \n2- Eliminar producto \n3- Hacer Chechout \n4- Salir"
    )
}