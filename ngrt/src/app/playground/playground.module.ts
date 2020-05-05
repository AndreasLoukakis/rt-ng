import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayComponent } from './components/play/play.component';
import { ChildComponent } from './components/child/child.component';
import { AttrTestDirective } from './directives/attr-test.directive';

import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [PlayComponent, ChildComponent, AttrTestDirective],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [PlayComponent]
})
export class PlaygroundModule { }
