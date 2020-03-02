import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { UiShellModule } from './ui-shell/ui-shell.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
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
