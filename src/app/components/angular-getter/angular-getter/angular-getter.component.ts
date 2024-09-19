import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-angular-getter',
  standalone: true,
  templateUrl: './angular-getter.component.html',
})
export class AngularGetterComponent {
  dataSet1: number[] = [1];
  dataSet2: number[] = [2];

  get accDataByGetter(): number[] {
    console.log('getter');
    return [...this.dataSet1, ...this.dataSet2];
  }

  updatePropDataSet(num: number) {
    this.dataSet2.push(num + 1);
  }

  dataSet3 = signal<number[]>([3]);
  dataSet4 = signal<number[]>([4]);

  accDataBySignal = computed<number[]>(() => {
    console.log('signal');
    return [...this.dataSet3(), ...this.dataSet4()];
  });

  updateSignalDataSet(num: number) {
    this.dataSet4.update((prev) => [...prev, num]);
  }
}
