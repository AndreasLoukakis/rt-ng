import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'

import { MovieRoutingModule } from './movie-routing.module';
import { MovieComponent } from './movie.component';
import { MovieSummaryComponent } from './components/movie-summary/movie-summary.component';
import { MovieCollectionComponent } from './components/movie-collection/movie-collection.component';
import { MovieCollectionActionsComponent } from './components/movie-collection-actions/movie-collection-actions.component';
import { MovieCollectionItemEditorComponent } from './components/movie-collection-item-editor/movie-collection-item-editor.component';
import { MovieCollectionStateComponent } from './components/movie-collection-state/movie-collection-state.component';


@NgModule({
  declarations: [MovieComponent, MovieSummaryComponent, MovieCollectionComponent, MovieCollectionActionsComponent, MovieCollectionItemEditorComponent, MovieCollectionStateComponent],
  imports: [
    CommonModule,
    MovieRoutingModule,
    ReactiveFormsModule
  ]
})
export class MovieModule { }
