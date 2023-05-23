import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';
import { AuthRoutingModule } from './auth-routing.module';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext'
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    LoginPageComponent,
    SignUpPageComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    AuthRoutingModule,
    CardModule,
    DividerModule,
    ButtonModule,
    InputTextModule,
  ]
})
export class AuthPagesModule { }
