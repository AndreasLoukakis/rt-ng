import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { UiShellModule } from './ui-shell/ui-shell.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UiShellModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
