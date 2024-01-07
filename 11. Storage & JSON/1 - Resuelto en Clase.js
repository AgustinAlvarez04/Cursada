let stock = [];

let carrito = JSON.parse(localStorage.getItem("carrito"));

if (carrito == null) {
    carrito = [];
}

stock.push(new Producto("Monitor", 40000));
stock.push(new Producto("Mouse", 5000));
stock.push(new Producto("Parlante", 15000));
stock.push(new Producto("Estabilizador de tension", 5000));

const select = document.getElementById("productos");
const agregar = document.getElementById("agregar");
const items = document.getElementById("items");
const total = document.getElementById("total");
const vaciar = document.getElementById("vaciar");
const aumentar = document.getElementById("aumentar");
const aumento = document.getElementById("aumento");

function dibujaCarrito() {
    localStorage.setItem("carrito", JSON.stringify(carrito));
    items.innerHTML = "";
    carrito.forEach((elemento, indice) => {
        let tr = document.createElement("tr");
        let th = document.createElement("th");
        th.innerText = elemento.producto.nombre;
        tr.appendChild(th);

        th = document.createElement("th");
        th.innerText = elemento.cantidad;

        const suma = document.createElement("button");
        suma.className = "btn btn-primary";
        suma.innerText = "+";
        const resta = document.createElement("button");
        resta.className = "btn btn-primary";
        resta.innerText = "-";

        suma.onclick = () => {
            elemento.cantidad++;
            dibujaCarrito();
        };
        resta.onclick = () => {
            if (elemento.cantidad > 0) {
                elemento.cantidad--;
                dibujaCarrito();
            }
        };

        th.appendChild(resta);
        th.appendChild(suma);
        tr.appendChild(th);

        th = document.createElement("th");
        th.innerText = elemento.producto.precio;
        tr.appendChild(th);

        th = document.createElement("th");
        let eliminarBtn = document.createElement("button");
        eliminarBtn.className = "btn btn-danger";
        eliminarBtn.innerText = "Eliminar";
        eliminarBtn.onclick = () => {
            carrito.splice(indice, 1);
            dibujaCarrito();
        };
        th.append(eliminarBtn);
        tr.append(th);

        items.appendChild(tr);
    });
    total.innerText = carrito.reduce(
        (acum, elemento) => acum + elemento.cantidad * elemento.producto.precio,
        0
    );
}

aumentar.onclick = () => {
    let cant = Number(aumento.value);
    let indice = select.value;
    stock[indice].precio += cant;

    dibujaCarrito();
    mostrarStock();
};

vaciar.onclick = () => {
    carrito = [];
    dibujaCarrito();
};

agregar.onclick = () => {
    let elementoAgregar = stock[select.value];

    let pos = carrito.findIndex(
        (elemento) => elemento.producto.nombre == elementoAgregar.nombre
    );

    if (pos == -1) {
        let item = new Item(elementoAgregar, 1);
        carrito.push(item);
    } else {
        carrito[pos].cantidad++;
    }
    dibujaCarrito();
};

function mostrarStock() {
    select.innerHTML = "";
    stock.forEach((producto, indice) => {
        let op = document.createElement("option");
        op.innerText = `${producto.nombre} -- $${producto.precio}`;
        op.value = indice;
        select.appendChild(op);
    });
}

mostrarStock();
dibujaCarrito();
