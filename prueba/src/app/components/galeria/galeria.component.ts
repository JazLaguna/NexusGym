import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { Galeria } from '../../galeria';

@Component({
  selector: 'app-galeria',
  imports: [CommonModule,MatGridListModule],
  templateUrl: './galeria.component.html',
  styleUrl: './galeria.component.css'
})
export class GaleriaComponent {
  img: Galeria[] = [
    {  img: 'assets/img/galeria1.jpg' },
    {  img: 'assets/img/galeria2.jpg' },
    {  img: 'assets/img/galeria3.jpg' },
    {  img: 'assets/img/galeria4.jpg' },
    {  img: 'assets/img/galeria5.jpg' },
    {  img: 'assets/img/galeria6.jpg' },
    {  img: 'assets/img/galeria7.jpg' },
    {  img: 'assets/img/galeria8.jpg' },
    {  img: 'assets/img/galeria9.jpg' },
    {  img: 'assets/img/galeria10.jpg' },
    {  img: 'assets/img/galeria11.jpg' }
  ];
}
