import { Persona } from './Persona';

export class Profesor extends Persona {
  constructor(
    nombre: string,
    public legajo: number
  ) {
    super(nombre);
  }
}