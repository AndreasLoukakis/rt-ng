import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { InTransitInterceptor } from './ui-shell/interceptors/in-transit.interceptor';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UiShellModule } from './ui-shell/ui-shell.module';
import { PlaygroundModule } from './playground/playground.module';

import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    UiShellModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    PlaygroundModule,
    SharedModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InTransitInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
