import {inject, Injectable, NgZone} from '@angular/core';
import {animate} from "motion";

@Injectable({
  providedIn: 'root'
})
export class AnimationService {
  private zone = inject(NgZone)

  animateIcon(element: HTMLElement) {
    this.zone.runOutsideAngular(() => {
      animate(
        element,
        {
          transform: ['rotate(360deg)', 'rotate(-360deg)', 'none'],
        },
        {
          offset: [0, 0.5, 1],
        }
      );
    });
  }
}
