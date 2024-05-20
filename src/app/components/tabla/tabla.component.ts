import { Component } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MascotasService } from '../../services/mascotas.service';
import { Mascota } from '../../models/mascotas';

@Component({
  selector: 'app-tabla',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './tabla.component.html',
  styleUrl: './tabla.component.scss'
})
export class TablaComponent {
  mascotas: Mascota[];
  displayedColumns: string[] = ['nombre', 'raza'];
  dataSource: MatTableDataSource<Mascota>;

  constructor(private mascotasService: MascotasService) {
    this.mascotas = [];
    this.dataSource = new MatTableDataSource(this.mascotas);
    this.dataSource = new MatTableDataSource(this.mascotasService.obtenerMascotas());
  }
}