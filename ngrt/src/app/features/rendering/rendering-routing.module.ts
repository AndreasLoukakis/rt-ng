import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RenderingComponent } from './rendering.component';

const routes: Routes = [{ path: ':id', component: RenderingComponent, data: { breadcrumbs: { label: 'movie'}} }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RenderingRoutingModule { }
