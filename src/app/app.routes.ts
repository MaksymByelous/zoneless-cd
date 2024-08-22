import { Routes } from '@angular/router';
import {ParentComponent} from "./components/parent/parent.component";
import {ActiveToggleComponent} from "./components/active-toggle/active-toggle.component";

export const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: ParentComponent},
  {path: 'toggle', component: ActiveToggleComponent},
];
