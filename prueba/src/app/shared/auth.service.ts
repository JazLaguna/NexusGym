import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  /* Servicio para el manejo de nombres de usuarios permitidos */
  private admins = [
    { username: 'admin1', password: '1234', name: 'Kimbely Guadalupe Marmolejo García' },
    { username: 'admin2', password: 'abcd', name: 'Alicia Jazmín Díaz Laguna' },
    { username: 'admin3', password: 'pass2025', name: 'Georgina Salazar Partida' }
  ];

  login(username: string, password: string): boolean {
    const user = this.admins.find(a => a.username === username && a.password === password);
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
      return true;
    }
    return false;
  }

  logout() {
    localStorage.removeItem('user');
  }

  getUser() {
    return JSON.parse(localStorage.getItem('user')!);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('user');
  }
}
