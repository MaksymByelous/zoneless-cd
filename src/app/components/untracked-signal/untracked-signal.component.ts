import {Component, effect, signal, untracked} from '@angular/core';

// export function explicitEffect<T>(source: Signal<T>, action: (value: T) => void) {
//   effect(() => {
//     const s = source();
//     untracked(() => {
//       action(s)
//     });
//   });
// }
// explicitEffect(this.id, (id) => {
//   this.store.load(id);
// });

@Component({
  selector: 'app-untracked-signal',
  standalone: true,
  imports: [],
  templateUrl: './untracked-signal.component.html',
  styleUrl: './untracked-signal.component.scss'
})
export class UntrackedSignalComponent {
  sig1 = signal(1);
  sig2 = signal(1);
  sig3 = signal(1);
  sig4 = signal(1);
  sig5 = signal(1);

  signalTrain = [this.sig1, this.sig2, this.sig3, this.sig4, this.sig5];

  result = signal(0)

  constructor() {
    effect(() => {
      const b = this.sig2();
      const d = this.sig4();

      const a = untracked(this.sig1);
      const c = untracked(this.sig3);
      const e = untracked(this.sig5);

      untracked(() => this.doSomething(a,b,c,d,e));
    })
  }

  doSomething(a: number, b: number, c: number, d: number, e: number) {
    this.result.set(a + b + c + d + e)
  }

  updateSignal(index: number) {
    this.signalTrain[index].set(this.signalTrain[index]() + 1);
  }
}
