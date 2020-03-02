import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellWrapperComponent } from './components/shell-wrapper/shell-wrapper.component';



@NgModule({
  declarations: [ShellWrapperComponent],
  imports: [
    CommonModule
  ],
  exports: [ShellWrapperComponent]
})
export class UiShellModule { }
