export class Alumno {
  constructor(
    public nombre: string,
    public edad: number,
    public legajo: number
  ) {}

  obtenerEstado(): string {
    return "Es mayor de edad";
  }
    

  esMayorDeEdad(): boolean {
    return this.edad >= 18;
  }
}
