import { Component } from '@angular/core';
import { User } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  template: `<button (click)="login()" *ngIf="!user">Log in</button>`,
})
export class LoginComponent {
  user: User | null;

  constructor(private authService: AuthService, private router: Router) {
    this.user = authService.user;
  }

  async login() {
    await this.authService.loginWithGoogle();

    if (this.authService.user) {
      this.router.navigate(['/planner']);
    }
  }
}
