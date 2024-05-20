import { Component } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-dialogo',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
  templateUrl: './dialogo.component.html',
  styleUrl: './dialogo.component.scss'
})
export class DialogoComponent {
  resultado: boolean;

  constructor() {
    this.resultado = false;
  }
}