import { Routes } from '@angular/router';
import {ParentComponent} from "./components/parent/parent.component";

export const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: ParentComponent},
];
