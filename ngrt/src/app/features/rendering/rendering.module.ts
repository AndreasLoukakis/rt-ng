import { NgModule } from '@angular/core';
import { SharedModule } from './../../shared/shared.module';

import { RenderingRoutingModule } from './rendering-routing.module';
import { RenderingComponent } from './rendering.component';
import { CharactersComponent } from './components/characters/characters.component';
import { PlanetsComponent } from './components/planets/planets.component';
import { StarshipsComponent } from './components/starships/starships.component';
import { VehiclesComponent } from './components/vehicles/vehicles.component';
import { ItemFormComponent } from './components/item-form/item-form.component';


@NgModule({
  declarations: [RenderingComponent, CharactersComponent, VehiclesComponent, StarshipsComponent, PlanetsComponent, ItemFormComponent],
  imports: [
    SharedModule,
    RenderingRoutingModule
  ]
})
export class RenderingModule { }
