import { Auto } from "./Auto";
import { Moto } from "./Moto";
import { Camion } from "./camion";

export class Vehiculo {
    private _marca: string;
    private _modelo: string;
    private _anio: number;
    private _activo: boolean; 
    
    constructor(marca:string, modelo:string, anio:number, activo:boolean) {
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
        this.activo = true; // Estado del vehículo
    }

    get marca() {
        return this.marca;
    }

    set marca(marca) {
        this.marca = marca;
    }


    get modelo() {
        return this.modelo;
    }

    set modelo(modelo) {
        this.modelo = modelo;
    }

    get anio() {
        return this.anio;
    }

    set anio(anio) {
        this.anio = anio;

    }
    public get activo(): boolean {
        return this._activo;
    }


    public set activo(value: boolean) {
        this._activo = value;
    }

    darDeBaja() {
        this.activo = false;
    }

    esActivo() {
        return this.activo;
    }
}
