import {Component, ElementRef, inject, input, viewChild} from '@angular/core';
import {AnimationService} from "../../services/animation.service";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-cd-icon',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './cd-icon.component.html',
  styleUrl: './cd-icon.component.scss'
})
export class CdIconComponent {
  iconType = input<'render' | 'cd'>('cd');

  private animateService = inject(AnimationService);

  private readonly cdIcon =
    viewChild.required<ElementRef<HTMLElement>>('cdIcon');

  ring() {
    this.animateService.animateIcon(this.cdIcon().nativeElement);
  }
}
