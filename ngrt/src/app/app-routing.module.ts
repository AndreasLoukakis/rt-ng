import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: '', redirectTo: '/inbox', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, data: {title: 'Home', breadcrumbs: {label: 'Home'}} },
  { path: 'inbox', loadChildren: () => import('./features/inbox/inbox.module').then(m => m.InboxModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
