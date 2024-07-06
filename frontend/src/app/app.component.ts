import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  template: `
  <main class="container">
    <section>
      <nav>
        <ul>
          <li><strong>Daily Dune</strong></li>
        </ul>
        <ul>
          <li *ngIf="authService.user" (click)="authService.logout()">
            <a><mat-icon>logout</mat-icon></a>
          </li>
        </ul>
      </nav>
    </section>

    <section>
      <router-outlet></router-outlet>
    </section>
  </main>
  `,
})
export class AppComponent {
  sidebar = false;
  opened = false;
  title = 'daily-dune';

  constructor(public authService: AuthService) { }
}
