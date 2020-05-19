import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PlayComponent } from './components/play/play.component';
import { ChildComponent } from './components/child/child.component';
import { AttrTestDirective } from './directives/attr-test.directive';



@NgModule({
  declarations: [PlayComponent, ChildComponent, AttrTestDirective],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [PlayComponent]
})
export class PlaygroundModule { }
