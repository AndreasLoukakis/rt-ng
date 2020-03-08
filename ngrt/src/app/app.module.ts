import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayComponent } from './playground/play/play.component';
import { AttrTestDirective } from './playground/directives/attr-test.directive';
import { ChildComponent } from './playground/child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayComponent,
    AttrTestDirective,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
