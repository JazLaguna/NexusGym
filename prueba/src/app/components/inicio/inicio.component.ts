import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-inicio',
  standalone:true,
  imports: [
    CommonModule,
    MatTabsModule
  ],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
  imagenesCarrusel = [
    'assets/img/img3.png',
    'assets/img/img2.png',
    'assets/img/img4.png'
  ];

  activeIndex = 0;
  private intervalSub!: Subscription;

  ngOnInit() {
    // Cambia de slide cada 3 segundos
    this.intervalSub = interval(3000).subscribe(() => {
      this.activeIndex = (this.activeIndex + 1) % this.imagenesCarrusel.length;
    });
  }

  ngOnDestroy() {
    this.intervalSub.unsubscribe();
  }
  
}
