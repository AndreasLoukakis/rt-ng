import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayComponent } from './playground/components/play/play.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'inbox'},
  { path: 'play', component: PlayComponent},
  {
    path: 'inbox',
    // promise. Browser dynamic imports.
    loadChildren: () => import('./features/inbox/inbox.module').then(m => m.InboxModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
