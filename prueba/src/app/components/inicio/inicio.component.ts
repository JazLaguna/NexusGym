import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { interval, Subscription } from 'rxjs';
import { EntrenadorasService } from '../../shared/entrenadoras.service';
import { BusquedaComponent } from '../busqueda/busqueda.component';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [
    CommonModule,
    MatTabsModule,
    BusquedaComponent,
    MatCardModule
  ],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
  imagenesCarrusel = [
    'assets/img/principal.png',
    /*'assets/img/img1.png',
    'assets/img/img2.png',
    'assets/img/img4.png'*/
  ];

  activeIndex = 0;
  private intervalSub!: Subscription;

  entrenadoras = signal<any[]>([]);
  entrenadorasFiltradas = signal<any[]>([]);

  constructor(private entrenadorasService: EntrenadorasService) { }

  ngOnInit() {
    // Cambia de slide cada 3 segundos
    this.intervalSub = interval(3000).subscribe(() => {
      this.activeIndex = (this.activeIndex + 1) % this.imagenesCarrusel.length;
    });

    this.entrenadorasService.getEntrenadoras().subscribe(res => {
      this.entrenadoras.update(() => res);
      this.entrenadorasFiltradas.update(() => res);
    });

  }

  ngOnDestroy() {
    this.intervalSub.unsubscribe();
  }
  /* por nombre de entrenadora
    onBuscar(termino: string) {
      this.entrenadorasFiltradas.update(() => 
        this.entrenadoras().filter((entrenadora: any) => 
          entrenadora.nombre.toLowerCase().includes(termino)
        )
      );
    }*/

  onBuscar(termino: string) {
    this.entrenadorasFiltradas.update(() =>
      this.entrenadoras().filter((entrenadora: any) =>
        entrenadora.discipline_name.toLowerCase().includes(termino)
      )
    );
  }



}
