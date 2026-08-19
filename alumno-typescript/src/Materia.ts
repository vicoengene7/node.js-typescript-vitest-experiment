import {Profesor} from './Profesor';
import {Alumno} from './Alumno';
export class Materia {
    public alumnos: Alumno[] = []

    constructor(
    public nombre: string,
    public anio: number,
    public titular: Profesor,
    public adjunto: Profesor,
  ) {}

  agregarAlumno(alumno: Alumno): void {
    this.alumnos.push(alumno);
  }
}
