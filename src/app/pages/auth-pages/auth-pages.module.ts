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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GetApiStatusService } from '@core/services/get-api-status.service';
import { HttpClient } from '@angular/common/http';



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
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: []
})
export class AuthPagesModule { }
