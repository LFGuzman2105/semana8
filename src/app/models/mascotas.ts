export class Mascota {
    private nombre: string;
    private raza: string;

    constructor(nombre: string, raza: string) {
        this.nombre = nombre;
        this.raza = raza;
    }

    getNombre(): string {
        return this.nombre;
    }

    getRaza(): string {
        return this.raza;
    }
}