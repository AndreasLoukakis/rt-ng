import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { InboxRoutingModule } from './inbox-routing.module';
import { InboxComponent } from './inbox.component';
import { ListComponent } from './components/list/list.component';
import { ListItemComponent } from './components/list-item/list-item.component';
import { ListItemDetailsComponent } from './components/list-item-details/list-item-details.component';
import { TplModifierDirective } from './directives/tpl-modifier.directive';


@NgModule({
  declarations: [InboxComponent, ListComponent, ListItemComponent, ListItemDetailsComponent, TplModifierDirective],
  imports: [
    CommonModule,
    InboxRoutingModule,
    // HttpClientModule
  ]
})
export class InboxModule { }
