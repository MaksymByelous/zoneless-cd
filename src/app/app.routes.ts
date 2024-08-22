import { Routes } from '@angular/router';
import {ParentComponent} from "./components/parent/parent.component";
import {ActiveToggleComponent} from "./components/active-toggle/active-toggle.component";
import {UntrackedSignalComponent} from "./components/untracked-signal/untracked-signal.component";

export const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: ParentComponent},
  {path: 'toggle', component: ActiveToggleComponent},
  {path: 'untracked', component: UntrackedSignalComponent},
];
