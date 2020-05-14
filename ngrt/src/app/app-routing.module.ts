import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlayComponent } from './playground/components/play/play.component';
import { PlaygroundModule } from './playground/playground.module';

import { AuthGuard } from './features/auth/guards/auth.guard';

// https://angular.io/guide/styleguide#folders-by-feature-structure

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'play'},
  { path: 'play', component: PlayComponent },
  {
    path: 'inbox',
    loadChildren: () => import('./features/inbox/inbox.module').then(m => m.InboxModule),
    canActivate: [AuthGuard]
  },
  { path: 'auth', loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
