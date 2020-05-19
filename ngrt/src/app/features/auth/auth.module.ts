import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './components/login/login.component';
import { TplDrivenLoginComponent } from './components/tpl-driven-login/tpl-driven-login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [AuthComponent, LoginComponent, TplDrivenLoginComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
