import { Injectable } from '@angular/core';

import { User } from '../models/user.interface';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  ENDPOINT:string ='http://localhost:3000/api/v1/auth/login';
  constructor(
    private readonly http:HttpClient

  ){}
  login(user: User) {
      
   try {
    this.http.post(this.ENDPOINT , user).subscribe(console.log);
   } catch (error) {
      console.log(error);
   }
  }
}
