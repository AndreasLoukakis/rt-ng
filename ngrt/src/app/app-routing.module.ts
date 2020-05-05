import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlayComponent } from './playground/components/play/play.component';
import { PlaygroundModule } from './playground/playground.module';

// https://angular.io/guide/styleguide#folders-by-feature-structure

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'play'},
  { path: 'play', component: PlayComponent },
  {
    path: 'inbox',
    loadChildren: () => import('./features/inbox/inbox.module').then(m => m.InboxModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
