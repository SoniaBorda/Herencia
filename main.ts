import { Vehiculo } from "./vehiculos";
import { Auto } from "./Auto";
import { Moto } from "./Moto";
import { Camion } from "./camion";
import { RegistroAutomotor } from "./registroautomotor";

const registro = new RegistroAutomotor();
const auto1 = new Auto("Toyota", "Corolla", 2020, true,4);
const moto1 = new Moto("Yamaha", "MT-09", 2022, 847,true);
const camion1 = new Camion("Mercedes", "Actros", 2019, 30000,true);

registro.agregarVehiculo(auto1);
registro.agregarVehiculo(moto1);
registro.agregarVehiculo(camion1);

console.log("Vehículos activos:", registro.getVehiculosActivos());
registro.darDeBaja(1); // Baja la moto
console.log("Vehículos después de dar de baja la moto:", registro.listarVehiculos());