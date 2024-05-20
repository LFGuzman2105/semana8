import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatDialog } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { DialogoComponent } from '../dialogo/dialogo.component';
import { MatDialogModule } from '@angular/material/dialog';
import { Mascota } from '../../models/mascotas';
import { MascotasService } from '../../services/mascotas.service';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [MatCardModule, MatFormFieldModule, MatRadioModule, MatInputModule, MatButtonModule, FormsModule, DialogoComponent, MatIconModule, MatDialogModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.scss'
})
export class FormularioComponent {
  nombre: string;
  raza: string;

  constructor(public dialog: MatDialog, private mascotasService: MascotasService) {
    this.nombre = '';
    this.raza = '';
  }

  openDialog() {
    if (this.nombre == "" || this.raza == "") {
      alert("Por favor, llene todos los campos.");
    }
    else { 
      const dialogRef = this.dialog.open(DialogoComponent);
      
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.mascotasService.agregarMascota(new Mascota(this.nombre, this.raza));
        }
      });
    }
  }
}