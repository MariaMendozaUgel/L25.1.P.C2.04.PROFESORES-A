
import Cl_Profesor from "./Cl_profesor.js"; 

export default class Cl_contratado extends Cl_Profesor{
    constructor(nombre,bono,horas) {
        super(nombre,bono),
        this.horas=horas;
    }
    set horas (horas) {
        this._horas = +horas;
    }
    get horas() {
        return this._horas
    }

    ingresoTotal() {
        return (this.horas * 10) + super.bono()
    }
}