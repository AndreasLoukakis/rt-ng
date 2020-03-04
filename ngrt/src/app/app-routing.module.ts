import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayComponent } from "./playground/play/play.component";


const routes: Routes = [
  {path: 'play', component: PlayComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
