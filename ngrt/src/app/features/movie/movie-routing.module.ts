import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MovieComponent } from './movie.component';
import { MovieCollectionComponent } from './components/movie-collection/movie-collection.component'
import { MovieCollectionReduxComponent } from './components/movie-collection-redux/movie-collection-redux.component'

const routes: Routes = [
  { path: '', component: MovieComponent },
  {
    path: ':id', component: MovieComponent, children: [
      // { path: ':collection', component: MovieCollectionComponent }
      { path: ':collection', component: MovieCollectionReduxComponent }
  ]
 },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovieRoutingModule { }
