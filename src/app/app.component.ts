import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <div class="text-center font-bold text-3xl mb-5">Zoneless change detections demo</div>
    <nav class="flex justify-center space-x-4 mb-5 text-sky-600">
      <a routerLink="/home" routerLinkActive="font-bold">Home</a>
      <a routerLink="/toggle" routerLinkActive="font-bold">Toggle</a>
      <a routerLink="/untracked" routerLinkActive="font-bold">Untracked</a>
      <a routerLink="/getter" routerLinkActive="font-bold">Getter</a>
    </nav>
    <router-outlet />
  `,
})
export class AppComponent {
}
