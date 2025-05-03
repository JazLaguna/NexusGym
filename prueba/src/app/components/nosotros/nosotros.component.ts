import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {  MatCardModule } from '@angular/material/card';
import { MatOptionModule, provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule, MatDateRangePicker } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar } from '@angular/material/snack-bar';
import { OpinionComponent } from '../../opinion/opinion.component';
import Swal from 'sweetalert2';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-nosotros',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [FormsModule, MatCardModule, MatInputModule,MatFormFieldModule,MatButtonModule,  MatDatepickerModule, OpinionComponent, MatOptionModule, MatSelectModule],
  templateUrl: './nosotros.component.html',
  styleUrl: './nosotros.component.css'
})
export class NosotrosComponent {
  nombre: string = '';
  opinion: string = '';
  apellido: string = '';
  fecha: string = '';
  opiniones: any[] = [];
  hoy: Date = new Date();
  edad: number | undefined;
  edades: number[] = [];


  enviar() {
    const nuevaOpinion = {
      nombre: this.nombre,
      apellido: this.apellido,
      fecha: this.fecha,
      opinion: this.opinion,
      edad: this.edad
    };

    this.opiniones = JSON.parse(localStorage.getItem('opiniones') || '[]');
    this.opiniones.push(nuevaOpinion);
    localStorage.setItem('opiniones', JSON.stringify(this.opiniones));

    /*alert('¡Gracias por tu opinión!');
    this.nombre = '';
    this.opinion = '';*/
    Swal.fire({
      title: '¡Gracias por tu opinión!',
      html: `<p><strong>Nombre:</strong> ${this.nombre}</p>
             <p><strong>Opinión:</strong> ${this.opinion}</p>`,
      icon: 'success',
      confirmButtonText: 'Cerrar'
    });
    
    // Luego limpias los campos
    this.nombre = '';
    this.opinion = '';
    this.apellido = '';
    this.fecha = '';
    this.edad= undefined;
  }

  ngOnInit() {
    this.opiniones = JSON.parse(localStorage.getItem('opiniones') || '[]');
    this.edades = Array.from({ length: 83 }, (_, i) => i + 18); // de 18 a 100

  }
}
  
