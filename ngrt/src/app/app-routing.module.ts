import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {  PlayComponent} from './playground/components/play/play.component';


const routes: Routes = [
  { path: '', redirectTo: '/play', pathMatch: 'full'},
  { path: 'play', component: PlayComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
