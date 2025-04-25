import { Component, inject } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../shared/auth.service';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSelectModule,
    MatOptionModule
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  private authService = inject(AuthService);
  private router = inject(Router);
  private fb = inject(FormBuilder);

  // Formulario con validadores required
  loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
    edad: [null, Validators.required],
    nivel: this.fb.group({
      basico: [false],
      intermedio: [false],
      avanzado: [false]
    })
  });
  
  edades = Array.from({ length: 60 - 18 + 1 }, (_, i) => i + 18); //para el checkbox
  errorMessage: string = '';

  onSubmit() {
    const { username, password, edad, nivel } = this.loginForm.value;
  
    // Validación de mayúsculas en username
    if (username !== username?.toLowerCase()) {
      Swal.fire({
        icon: 'warning',
        title: 'Nombre inválido',
        text: 'El nombre de usuario debe contener solo minúsculas.',
        confirmButtonColor: '#eab6ac'
      });
      return;
    }
  
    // Validación de longitud de contraseña
    if (password && password.length > 5) {
      Swal.fire({
        icon: 'error',
        title: 'Contraseña inválida',
        text: 'La contraseña no debe tener más de 5 caracteres.',
        confirmButtonColor: '#eab6ac'
      });
      return;
    }
  
    if (this.loginForm.valid) {
      let nivelSeleccionado = '';
      if (nivel?.basico) nivelSeleccionado = 'basico';
      else if (nivel?.intermedio) nivelSeleccionado = 'intermedio';
      else if (nivel?.avanzado) nivelSeleccionado = 'avanzado';
  
      const success = this.authService.login(username!, password!, edad!, nivelSeleccionado);
      if (success) {
        this.router.navigate(['/inicio']);
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Credenciales incorrectas',
          text: 'Verifica tu usuario y contraseña.',
          confirmButtonColor: '#eab6ac'
        });
      }
    }
  }
  
  
  onNivelChange(nivel: string) {
    const nivelGroup = this.loginForm.get('nivel');
    if (!nivelGroup) return;
  
    Object.keys(nivelGroup.value).forEach(key => {
      nivelGroup.get(key)?.setValue(key === nivel);
    });
  }
  
}
