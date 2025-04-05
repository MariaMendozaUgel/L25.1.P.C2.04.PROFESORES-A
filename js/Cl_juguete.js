/*/ El departamento de juguetes está ofreciendo un descuento del 10% si el juguete es para 
edad de 1 año. 
Usando la clase suministrada Cl_articulo, programe la clase Cl_juguete con el atributo edad y 
el método descuento, que permita calcular el monto a pagar correctamente. Note que esta nueva 
clase sólo amerita edad y descuento(). 
Realice un programa que lea los datos de un juguete y reporte el monto a pagar./*/
import Cl_articulo from "./Cl_articulo.js"
export default class Cl_juguete extends Cl_articulo {
    constructor(nombre, cantidad, precioBase, edad) {
        super(nombre, cantidad, precioBase); 
        this.edad = edad;
    }
    set edad (edad) {
        this._edad = edad;
    }
    get edad () {
        return this._edad;
    }

    descuento() {
        if (this.edad == 1) {
            return this.precioBase * this.cantidad * 0.1;
        } else {
            return 0;
        }
    }
    
}