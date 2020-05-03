import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PlayComponent } from './play/play.component';
import { AttrTestDirective } from './directives/attr-test.directive';
import { ChildComponent } from './child/child.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NestedComponent } from './nested/nested.component';
import { ObservableComponent } from './components/observable/observable.component';
import { PromiseComponent } from './components/promise/promise.component';



@NgModule({
  declarations: [
    PlayComponent,
    AttrTestDirective,
    ChildComponent,
    NestedComponent,
    ObservableComponent,
    PromiseComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [PlayComponent]
})
export class PlaygroundModule { }
