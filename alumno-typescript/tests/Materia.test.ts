import {describe, expect, test} from "vitest";
import { Materia } from "../src/Materia";
import { Profesor } from "../src/Profesor";

describe("Materia", () => {
    test("una materia debe tener un nombre, año y carrera", () => {
        const profesorTitular = new Profesor("Lourdes M.", 123);
        const profesorAdjunto = new Profesor("Profesor Adjunto", 456);
        const materia = new Materia(
            "Paradigmas y Lenguajes de Programación II", 2026, 
            profesorTitular,
            profesorAdjunto
        );

        expect(materia.nombre).toBe("Paradigmas y Lenguajes de Programación II");
        expect(materia.anio).toBe(2026);
        expect(materia.titular).toBe(profesorTitular);
        expect(materia.adjunto).toBe(profesorAdjunto);
      
    });
});