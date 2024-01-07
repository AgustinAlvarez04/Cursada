"use:strict"

/* .preventDefault(); = Previene el comportamiento por default del evento */

/* OTRAS TECLAS
RATON:
    onmousedown/mouseup = Se oprime/suelta el boton del raton sobre un elemento
    onmouseover/mouseout = el puntero del mouse se mueve sobre/sale delelemento
    onmousemove = el movimiento del mouse sobreel elemento activa el evento
    onclick = se activa despues de mousedown o mouseup sobre un elemento valido
TECLADO:
    onkeydown = se apreta la tecla
    onkeyup = se suelta la tecla
    onchange = detecta un cambio en el foco del elemento
    oninput = nos hace de "console.log()" cada que escribamos
    onsubmit = se dispara cuando hacemos un formulario
*/


const inputTitular = document.getElementById("titular")
const inputContacto = document.getElementById("contacto")
const inputSaldo = document.getElementById("saldo")
const btnAgregar = document.getElementById("agregar")
const inputTitularConsulta = document.getElementById("titularConsulta")
const inputMonto = document.getElementById("monto")
const btnConsultar = document.getElementById("consultar")
const btnRetirar = document.getElementById("retirar")
const btnDepositar = document.getElementById("depositar")


let clientes = [
    new CuentaBancaria("agus", "123321123", 15000, 15000),
    new CuentaBancaria("cami", "3321132", 15000, 15000)
]

btnAgregar.onclick = (e) => {
    e.preventDefault();
    let nombre = inputTitular.value;
    let contacto = inputContacto.value;
    let saldo = inputSaldo.value;
    let repetido = clientes.some(elemento => elemento.titular == nombre)
    if (nombre != "" && contacto != "" && saldo > 0 && !repetido) {
        let cuenta = new CuentaBancaria(nombre, contacto, saldo, 150000)
        clientes.push(cuenta)
        console.log(clientes)
    } else { alert("Datos invalidos") }
    //if (repetido) alert("Datos repetidos")
};

btnConsultar.onclick = (e) => {
    e.preventDefault();
    let nombre = inputTitularConsulta.value;
    let clientesConsultar = clientes.find((elemento) => elemento.titular == nombre)
    if (clientesConsultar == undefined) {
        alert("No existe un cliente con ese nombre")
    } else {
        inputMonto.value = clientesConsultar.consultar();
    }
}

btnRetirar.onclick = (e) => {
    e.preventDefault();
    let nombre = inputTitularConsulta.value;
    let monto = Number(inputMonto.value)
    if (monto > 0) {
        let clientesConsultar = clientes.find(
            (elemento) => elemento.titular.toUpperCase() == nombre.toUpperCase()
        );
        if (clientesConsultar == undefined) {
            alert("No existe un cliente con ese nombre")
        } else {
            console.log(clientesConsultar)
            let resultado = clientesConsultar.extraerDinero(monto);
            if (!resultado) {
                alert("No se puede extraer dinero")
            }
        }
    }
}

btnDepositar.onclick = (e) => {
    e.preventDefault();
    let nombre = inputTitularConsulta.value;
    let monto = Number(inputMonto.value)
    if (monto > 0) {
        let clientesConsultar = clientes.find(
            (elemento) => elemento.titular.toUpperCase() == nombre.toUpperCase()
        );
        if (clientesConsultar == undefined) {
            alert("No existe un cliente con ese nombre")
        } else {
            console.log(clientesConsultar)
            let resultado = clientesConsultar.depositarDinero(monto);
            if (!resultado) {
                alert("No se puede depositar dinero")
            }
        }
    }
}