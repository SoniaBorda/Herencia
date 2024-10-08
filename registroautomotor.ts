import { Vehiculo } from "./vehiculos";
import { Auto } from "./Auto";
import { Moto } from "./Moto";
import { Camion } from "./camion";

 export class RegistroAutomotor {
    private vehiculos: Vehiculo[];

    constructor() {
        this.vehiculos = []; // Inicializa el array
    }

    agregarVehiculo(vehiculo: Vehiculo) {
        if (vehiculo instanceof Vehiculo) {
            this.vehiculos.push(vehiculo);
        } else {
            console.error("Solo se pueden agregar instancias de Vehiculo.");
        }
    }

    modificarVehiculo(index: number, nuevosDatos: Partial<Vehiculo>) {
        if (index < 0 || index >= this.vehiculos.length) {
            console.error("Índice fuera de rango.");
            return;
        }
        const vehiculo = this.vehiculos[index];
        Object.assign(vehiculo, nuevosDatos);
    }

    darDeBaja(index: number) {
        if (index < 0 || index >= this.vehiculos.length) {
            console.error("Índice fuera de rango.");
            return;
        }
        this.vehiculos[index].darDeBaja();
    }

    getVehiculosActivos(): Vehiculo[] {
        return this.vehiculos.filter(vehiculo => vehiculo.esActivo());
    }

    listarVehiculos() {
        return this.vehiculos.map((vehiculo, index) => ({
            index,
            marca: vehiculo.marca,
            modelo: vehiculo.modelo,
            anio: vehiculo.anio,
            activo: vehiculo.esActivo()
        }));
    }
}
