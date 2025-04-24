
// import { Routes } from '@angular/router';
// import { LoginComponent } from './components/login/login.component';
// import { authGuard } from './guards/auth.guard';
// import { AppComponent } from './app.component';

// export const routes: Routes = [
//   { path: 'dashboard', component: AppComponent, canActivate: [authGuard] },
//   { path: 'login', component: LoginComponent },
//   { path: '', redirectTo: 'login', pathMatch: 'full' }
// ];
import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const routes: Routes = [
  { path: '', component: AppComponent }
];
