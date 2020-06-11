import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MovieComponent } from './movie.component';
import { MovieCollectionComponent } from './components/movie-collection/movie-collection.component';

const routes: Routes = [
  // { path: '', component: MovieComponent },
  {
    path: ':id',
    component: MovieComponent,
    children: [
      { path: ':collection', component: MovieCollectionComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovieRoutingModule { }
