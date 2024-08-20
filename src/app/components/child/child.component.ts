import {AfterViewChecked, Component, input, signal, viewChild} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {CdIconComponent} from "../cd-icon/cd-icon.component";
import {AsyncPipe} from "@angular/common";

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [
    CdIconComponent,
    AsyncPipe
  ],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent implements AfterViewChecked {
  propertyData = 'Property Data';
  signalData = signal('Signal Data');
  inputData = input<string | null>();
  obsData$ = new BehaviorSubject<string>('Observable Data');
  cdIcon = viewChild.required(CdIconComponent);

  updateProperty() {
    this.propertyData = 'Property updated with button';
  }

  updatePropertyAfterTimeout() {
    setTimeout(() => {
      this.propertyData = 'Property updated after 2 seconds';
    }, 2000);
  }

  updateSignal() {
    this.signalData.set('Signal updated with button');
  }

  updateSignalAfterTimeout() {
    setTimeout(() => {
      this.signalData.set('Signal updated after 2 seconds');
    }, 2000);
  }

  updateObs() {
    this.obsData$.next('Observable updated with button');
  }

  updateObsAfterTimeout() {
    setTimeout(() => {
      this.obsData$.next('Observable updated after 2 seconds');
    }, 2000);
  }

  ngAfterViewChecked() {
    this.cdIcon().ring();
  }
}
