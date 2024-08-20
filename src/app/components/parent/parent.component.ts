import {afterRender, AfterViewChecked, Component, signal, viewChild} from '@angular/core';
import {ChildComponent} from "../child/child.component";
import {CdIconComponent} from "../cd-icon/cd-icon.component";

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [
    ChildComponent,
    CdIconComponent
  ],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss'
})
export class ParentComponent implements AfterViewChecked {
  cdIcon = viewChild.required<CdIconComponent>('cdIcon');
  renderIcon = viewChild.required<CdIconComponent>('renderIcon');

  childOneInput = 'Input Data';
  childTwoInput = signal('Input Data');

  constructor() {
    afterRender(() => {
      this.renderIcon().ring();
    });
  }

  ngAfterViewChecked() {
    this.cdIcon().ring();
  }

  updateChildOneInput() {
    this.childOneInput = `New Input ${Math.round(Math.random() * 100)}`;
  }

  updateChildOneInputAfterTimeout() {
    setTimeout(() => {
      this.childOneInput = `New Input ${Math.round(Math.random() * 100)}`;
    }, 2000);
  }

  updateChildTwoInput() {
    this.childTwoInput.set(`New Input ${Math.round(Math.random() * 100)}`);
  }

  updateChildTwoInputAfterTimeout() {
    setTimeout(() => {
      this.childTwoInput.set(`New Input ${Math.round(Math.random() * 100)}`);
    }, 2000);
  }
}
