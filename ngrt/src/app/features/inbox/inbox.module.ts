import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { InboxRoutingModule } from './inbox-routing.module';
import { InboxComponent } from './inbox.component';
import { ListComponent } from './components/list/list.component';
import { ListItemComponent } from './components/list-item/list-item.component';
import { ListItemDetailsComponent } from './components/list-item-details/list-item-details.component';


@NgModule({
  declarations: [InboxComponent, ListComponent, ListItemComponent, ListItemDetailsComponent],
  imports: [
    CommonModule,
    InboxRoutingModule,
    HttpClientModule
  ]
})
export class InboxModule { }
