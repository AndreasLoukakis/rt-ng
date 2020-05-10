import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InboxRoutingModule } from './inbox-routing.module';
import { InboxComponent } from './inbox.component';
import { ObservableListComponent } from './components/observable-list/observable-list.component';
import { PromiseListComponent } from './components/promise-list/promise-list.component';
import { ListItemComponent } from './components/list-item/list-item.component';
import { PreviewComponent } from './components/preview/preview.component';


@NgModule({
  declarations: [InboxComponent, ObservableListComponent, PromiseListComponent, ListItemComponent, PreviewComponent],
  imports: [
    CommonModule,
    InboxRoutingModule
  ]
})
export class InboxModule { }
