import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayComponent } from './play/play.component';
import { AttrTestDirective } from './directives/attr-test.directive';
import { ChildComponent } from './child/child.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PlayComponent,
    AttrTestDirective,
    ChildComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class PlaygroundModule { }
