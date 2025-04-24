import { Component, Input, ViewChild } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../shared/auth.service';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';  // Importa MatSidenavModule
import { MatListModule } from '@angular/material/list';  // Importa MatListModule
import { NosotrosComponent } from '../nosotros/nosotros.component';
import { ClasesComponent } from '../clases/clases.component';
import { ContactoComponent } from '../contacto/contacto.component';
import { GaleriaComponent } from '../galeria/galeria.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatSidenavModule,  
    MatListModule,
    RouterModule,
    NosotrosComponent,
    ClasesComponent,
    ContactoComponent,
    GaleriaComponent 
  ],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Input() user: any;
  @ViewChild('sidenav') sidenav!: MatSidenav;

  constructor(private authService: AuthService, private router: Router) {}

  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }

  toggleSidenav() {
    this.sidenav.toggle();
  }

  closeSidenav() {
    this.sidenav.close();
  }
}
