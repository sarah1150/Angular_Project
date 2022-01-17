import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

//   3mlna da 3shan kol el authentication functions

interface AuthResponseData {
  // 3shan id optional f el login bs
  token: string;
  id?: number;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  isAuth!: boolean;
  constructor(private http: HttpClient, private router: Router) {}
  signUp(email: string, password: string) {
    //   lma 7tena AuthResponceData bnfahemo in el responce hege bsakl el interface
    return this.http.post<AuthResponseData>('https://reqres.in/api/register', {
      email: email,
      password: password,
    });
  }

  login(email: string, password: string) {
    return this.http.post<AuthResponseData>('https://reqres.in/api/login', {
      email: email,
      password: password,
    });
  }
}
