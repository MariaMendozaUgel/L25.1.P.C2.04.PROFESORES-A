
import Cl_Profesor from "./Cl_profesor.js"

export default class Cl_fijo extends Cl_Profesor{
    constructor( nombre,bono,sueldo) {
        super(nombre,bono),
        this.sueldo= sueldo
    }
    
    ingresoTotal() {
        return this.sueldo + super.bono()
    }
}