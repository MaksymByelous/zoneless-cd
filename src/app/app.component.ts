import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <div class="text-center font-bold text-3xl mb-5">Zoneless change detections demo</div>
    <router-outlet />
  `,
})
export class AppComponent {
}
