import { Persona } from './Persona';

export class Alumno extends Persona {
  constructor(
    nombre: string,
    public edad: number,
    public legajo: number
  ) {
    super(nombre);
  }

  obtenerEstado(): string {
    return "Es mayor de edad";
  }

  esMayorDeEdad(): boolean {
    return this.edad >= 18;
  }
}
