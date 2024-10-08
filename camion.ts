import { Vehiculo } from './vehiculos';
export class Camion extends Vehiculo {
    constructor(marca:string, modelo:string, anio:number, capacidadCarga:number, activo:boolean) {
        super(marca, modelo, anio, activo);
        this.capacidadCarga = capacidadCarga;
    }

    get capacidadCarga() {
        return this.capacidadCarga;
    }

    set capacidadCarga(capacidadCarga) {
        this.capacidadCarga = capacidadCarga;
    }
}
