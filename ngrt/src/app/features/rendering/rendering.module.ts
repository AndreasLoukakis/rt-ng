import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RenderingRoutingModule } from './rendering-routing.module';
import { RenderingComponent } from './rendering.component';
import { PartiesComponent } from './components/parties/parties.component';
import { PropertiesComponent } from './components/properties/properties.component';
import { AccountsComponent } from './components/accounts/accounts.component';
import { ProductsComponent } from './components/products/products.component';


@NgModule({
  declarations: [RenderingComponent, PartiesComponent, PropertiesComponent, AccountsComponent, ProductsComponent],
  imports: [
    CommonModule,
    RenderingRoutingModule
  ]
})
export class RenderingModule { }
