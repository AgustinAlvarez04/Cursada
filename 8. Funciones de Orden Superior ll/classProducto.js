class Productos{
    constructor(producto, cantidad){
        this.producto = producto
        this.cantidad = cantidad
    }

    quitarElemento(cantidad){
        let res;
        if (this.cantidad >= cantidad && cantidad > 0){
            this.cantidad -= cantidad;
            res = this.producto;
        } else {
            res = null;
        }
        return res;
    }

    agregarElemento(cantidad){
        this.cantidad += cantidad
    }
}