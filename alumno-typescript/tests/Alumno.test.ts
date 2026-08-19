import { describe, expect, test } from "vitest";
import { Alumno } from "../src/Alumno";

describe("Alumno", () => {

  test("un alumno con el legajo 18", () => {
    const alumno = new Alumno("Juan", 18, 10);

    expect (alumno.legajo).toBe(10);
  });

  test("un alumno de 25 años debe ser mayor de edad", () => {
    const alumno = new Alumno("Ana", 25, 10);

    expect(alumno.esMayorDeEdad()).toBe(true);
  });

  test("un alumno de 17 años no debe ser mayor de edad", () => {
    const alumno = new Alumno("Pedro", 17, 10);

    expect(alumno.esMayorDeEdad()).toBe(false);
  });

});




