import { Injectable, isDevMode} from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AuthenticateResponse } from "./models";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  REST_API: string = ""

  constructor(private http : HttpClient) {
    if (isDevMode()) {
      this.REST_API = 'http://localhost:3000/api';
    } else {
      this.REST_API = '/api';
    }
  }

  public isAuthenticated() : Boolean {
    let userData = localStorage.getItem('userInfo')
    if(userData && JSON.parse(userData)){
      return true;
    }
    return false;
  }

  public setUserInfo(user: Object){
    localStorage.setItem('userInfo', JSON.stringify(user));
  }

  public getUserInfo(user: Object){
    let userData = localStorage.getItem('userInfo')
    if (userData) {
      return JSON.parse(userData)
    }
  }

  public validate(email: string, password: string) {
    return this.http.post<AuthenticateResponse>(`${this.REST_API}/user/authenticate`, {'email' : email, 'password' : password})
  }
}