import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayComponent } from './play/play.component';
import { AttrTestDirective } from './directives/attr-test.directive';
import { ChildComponent } from './child/child.component';




@NgModule({
  declarations: [
    PlayComponent,
    AttrTestDirective,
    ChildComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PlaygroundModule { }
