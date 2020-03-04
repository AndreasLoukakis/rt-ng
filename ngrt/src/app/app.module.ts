import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayComponent } from './playground/play/play.component';
import { AttrTestDirective } from './playground/directives/attr-test.directive';

@NgModule({
  declarations: [
    AppComponent,
    PlayComponent,
    AttrTestDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
