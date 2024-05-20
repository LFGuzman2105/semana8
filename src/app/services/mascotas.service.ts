import { Injectable } from '@angular/core';
import { Mascota } from '../models/mascotas';

@Injectable({
  providedIn: 'root'
})
export class MascotasService {
  private mascotas: Mascota[];

  constructor() { 
    this.mascotas = [];
  }

  agregarMascota(mascota: Mascota) {
    this.mascotas.push(mascota);
  }

  obtenerMascotas(): Mascota[] {
    return this.mascotas;
  }
}
