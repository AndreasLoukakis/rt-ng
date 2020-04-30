import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayComponent } from './components/play/play.component';
import { ChildComponent } from './components/child/child.component';



@NgModule({
  declarations: [PlayComponent, ChildComponent],
  imports: [
    CommonModule
  ],
  exports: [PlayComponent]
})
export class PlaygroundModule { }
