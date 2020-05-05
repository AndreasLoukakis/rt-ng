import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellWrapperComponent } from './components/shell-wrapper/shell-wrapper.component';
import { HeaderComponent } from './components/presentation/header/header.component';
import { SidebarComponent } from './components/presentation/sidebar/sidebar.component';
import { MainComponent } from './components/presentation/main/main.component';
import { RouterModule } from '@angular/router';

import {  PlaygroundModule} from './../playground/playground.module';

@NgModule({
  declarations: [ShellWrapperComponent, HeaderComponent, SidebarComponent, MainComponent],
  imports: [
    CommonModule,
    PlaygroundModule,
    RouterModule
  ],
  exports: [ShellWrapperComponent]
})
export class UiShellModule { }
