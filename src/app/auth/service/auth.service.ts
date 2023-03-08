import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../models/user.interface';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  ENDPOINT:string ='http://localhost:3000/api/v1/auth/login';
  constructor(
    private readonly http:HttpClient,
    private readonly router: Router
  ){}
  login(user: User) {
      
   try {
    this.http.post(this.ENDPOINT , user).subscribe(console.log);
    this.router.navigateByUrl('home');
   } catch (error) {
      console.log(error);
   }
  }
}
