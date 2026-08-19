import { describe, it, expect } from 'vitest';
import { Profesor } from '../src/Profesor';

describe('Profesor', () => {
  it('should create a new profesor with the correct name and legajo', () => {
    const profesor = new Profesor('John Doe', 12345);
    expect(profesor.nombre).toBe('John Doe');
    expect(profesor.legajo).toBe(12345);
  });
});
