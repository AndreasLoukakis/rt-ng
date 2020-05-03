import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayComponent } from "./playground/play/play.component";
import { NestedComponent } from './playground/nested/nested.component';
import { ObservableComponent } from './playground/components/observable/observable.component'


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/play' },
  { path: 'prob', component: ObservableComponent },
  {
    path: 'play',
    component: PlayComponent,
    children: [
      {
        path: 'more', component: NestedComponent,
        // data: {
        //   name: 'We are groot',
        //   img: 'https://filmschoolrejects.com/wp-content/uploads/2017/05/1JE-Y2KVQgfXYFGAMEeiEDw-700x422.jpeg'
        // }
      }
    ],

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
