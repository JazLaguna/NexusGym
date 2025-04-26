import { CommonModule, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { MatCard, MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [MatCardModule, CommonModule, NgStyle],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {
  hover1 = false;
  hover2 = false;

}
