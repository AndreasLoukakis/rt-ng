import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InboxComponent } from './inbox.component';
import { PreviewComponent } from './components/preview/preview.component';

const routes: Routes = [
  {
    path: '', component: InboxComponent, children: [
      { path: 'preview/:movieId', component: PreviewComponent },
      { path: 'preview/:movieId/:collection', component: PreviewComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InboxRoutingModule { }
