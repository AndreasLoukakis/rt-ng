import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ShellWrapperComponent } from './components/shell-wrapper/shell-wrapper.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MainComponent } from './components/main/main.component';



@NgModule({
  declarations: [ShellWrapperComponent, HeaderComponent, SidebarComponent, MainComponent],
  imports: [
    RouterModule,
    CommonModule
  ],
  exports: [ ShellWrapperComponent ]
})
export class UiShellModule { }
