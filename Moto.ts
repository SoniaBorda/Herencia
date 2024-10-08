import { Vehiculo } from './vehiculos';
export class Moto extends Vehiculo {
    constructor(marca:string, modelo:string, anio:number, cilindrada:number, activo:boolean) {
        super(marca, modelo, anio, activo);
        this.cilindrada = cilindrada;
    }

    get cilindrada() {
        return this.cilindrada;
    }

    set cilindrada(cilindrada) {
        this.cilindrada = cilindrada;
    }
}

