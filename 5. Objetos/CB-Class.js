/*
Genere una abstraccion de una cuenta bancaria con los atributos y
propiedades que se detallan: 
    - titular
    - contacto
    - saldo
    - limite de extraccion
el metodo extraer devolvera "true" si la transaccion fue exitosa.
y devolvera "false", en caso de que el monto que se quiso extraer sea mayor
al saldo, en cuyo casom el saldo no se debe modificar. Se deben realizar validaciones
necesarias (no se puede extraer o depositar montos negativos)
Luego, genera un programa que cree una cuenta bancaria dependiendo de los datos proporcionados
 */

//Abstraccion = Crear una clase - cuando hablemos de abstracciones debemos de crear una clase con lo solicitado.

class CuentaBancaria{
    constructor(titular, contacto, saldo, limite){
        this.titular = titular;
        this.contacto = contacto;
        if (saldo >= 0){
            this.saldo = saldo;
        } else {
            this.saldo = 0;
        }

        if (limite >= 150000){
            this.limiteExtraccion = limite;
        } else {
            this.limiteExtraccion = 150000;
        }   
    }
    extraer(monto){
        let res;
        if (monto > 0){
            if (monto <= this.saldo){
                this.saldo -= monto
                res = true;
            } else {
                alert("No puedes retirar mas que tu saldo")
                res = false;
            }
        } else {
            alert("No puede retirar montos negativos")
            res = false;
        }
        return res;
    }
    depositar(monto){
        if (monto > 0){
            this.saldo += monto
        } else {
            alert("No puede depositar montos negativos")
        }
    }
}