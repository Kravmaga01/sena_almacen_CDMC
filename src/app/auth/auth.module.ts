import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './pagues/login/login.component';
import { AuthService } from './service/auth.service';
@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule
  ],
  providers:[
    AuthService
  ]
 
})
export class AuthModule { }
