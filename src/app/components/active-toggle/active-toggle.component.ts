import {Component, computed, signal, WritableSignal} from '@angular/core';

export type Item = {
  id: number;
  $isActive: WritableSignal<boolean>;
};

@Component({
  selector: 'app-active-toggle',
  standalone: true,
  imports: [],
  templateUrl: './active-toggle.component.html',
  styleUrl: './active-toggle.component.scss'
})
export class ActiveToggleComponent {
  items: Item[] = [
    { id: 1, $isActive: signal(true) },
    { id: 2, $isActive: signal(false) },
    { id: 3, $isActive: signal(true) },
  ];

  $activeItems = computed(() => {
    const ids = [];
    for (const item of this.items) {
      if (item.$isActive()) {
        ids.push(item.id);
      }
    }
    return ids.join(', ');
  });

  addItem() {
    this.items.push({
      id: this.items.length + 1,
      $isActive: signal(false),
    });
  }

  //ALTERNATIVE WITH FIX

  list = signal([
    { id: 1, $isActive: signal(true) },
    { id: 2, $isActive: signal(false) },
    { id: 3, $isActive: signal(true) },
  ])

  listActiveItems = computed(() => {
    const activeItemsIds = this.list().filter((item: Item) => item.$isActive()).map((item: Item) => item.id);
    return activeItemsIds.join(', ');
  })

  addListItem() {
    const newList = [...this.list(), { id: this.list().length + 1, $isActive: signal(false) }];
    this.list.set(newList);
  }
}
