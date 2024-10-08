import { Vehiculo } from './vehiculos';
export class Auto extends Vehiculo {
    constructor(marca:string, modelo:string, anio:number, activo:boolean, puertas:number) {
        super(marca, modelo, anio,activo);
        this.puertas = puertas;
    }
s
    get puertas() {
        return this.puertas;
    }

    set puertas(puertas) {
        this.puertas = puertas;
    }
}
    
