import { Profesor } from './Profesor';
import { Alumno } from './Alumno';
import { Persona } from './Persona';

export class Materia extends Persona {
    public alumnos: Alumno[] = []

    constructor(
      nombre: string,
      public anio: number,
      public titular: Profesor,
      public adjunto: Profesor,
    ) {
      super(nombre);
    }

    agregarAlumno(alumno: Alumno): void {
      this.alumnos.push(alumno);
    }
}
