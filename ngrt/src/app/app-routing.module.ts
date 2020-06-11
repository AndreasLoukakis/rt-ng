import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {  PlayComponent} from './playground/components/play/play.component';
import { AuthGuard } from './features/auth/guards/auth.guard'

const routes: Routes = [
  { path: '', redirectTo: '/play', pathMatch: 'full'},
  { path: 'play', component: PlayComponent },
  {
    path: 'inbox',
    loadChildren: () => import('./features/inbox/inbox.module').then(m => m.InboxModule),
    canActivate: [AuthGuard],
  },
  { path: 'auth', loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule) },
  { path: 'movie', loadChildren: () => import('./features/movie/movie.module').then(m => m.MovieModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
