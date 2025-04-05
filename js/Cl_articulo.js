/*/ El departamento de juguetes está ofreciendo un descuento del 10% si el juguete es para 
edad de 1 año. 
Usando la clase suministrada Cl_articulo, programe la clase Cl_juguete con el atributo edad y 
el método descuento, que permita calcular el monto a pagar correctamente. Note que esta nueva 
clase sólo amerita edad y descuento(). 
Realice un programa que lea los datos de un juguete y reporte el monto a pagar.*/
export default class Cl_articulo {
    constructor(nombre, cantidad, precioBase) {
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.precioBase = precioBase;
    }
    set nombre (nombre) {
        this._nombre = nombre;
    }
    get nombre () {
        return this._nombre;
    }
    set cantidad (cantidad) {
        this._cantidad = cantidad;
    }
    get cantidad () {
        return this._cantidad;
    }
    set precioBase (precioBase) {
        this._precioBase = precioBase;
    }
    get precioBase () {
        return this._precioBase;
    }
    aPagar() {
        return this.precioBase * this.cantidad - this.descuento();
    }
}