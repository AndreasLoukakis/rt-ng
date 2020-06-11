import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieRoutingModule } from './movie-routing.module';
import { MovieComponent } from './movie.component';
import { MovieSummaryComponent } from './components/movie-summary/movie-summary.component';
import { MovieCollectionComponent } from './components/movie-collection/movie-collection.component';
import { MovieCollectionItemEditorComponent } from './components/movie-collection-item-editor/movie-collection-item-editor.component';
import { MovieCollectionActionsComponent } from './components/movie-collection-actions/movie-collection-actions.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [MovieComponent, MovieSummaryComponent, MovieCollectionComponent, MovieCollectionItemEditorComponent, MovieCollectionActionsComponent],
  imports: [
    CommonModule,
    MovieRoutingModule,
    ReactiveFormsModule
  ]
})
export class MovieModule { }
