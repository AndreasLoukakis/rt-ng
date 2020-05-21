import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MovieComponent } from './movie.component';
import { MovieCollectionComponent } from './components/movie-collection/movie-collection.component';
import { MovieCollectionStateComponent } from './components/movie-collection-state/movie-collection-state.component'

const routes: Routes = [
  { path: '', component: MovieComponent },
  {
    path: ':id', component: MovieComponent, children: [
    // { path: ':collection', component: MovieCollectionComponent}
    { path: ':collection', component: MovieCollectionStateComponent}
  ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovieRoutingModule { }
