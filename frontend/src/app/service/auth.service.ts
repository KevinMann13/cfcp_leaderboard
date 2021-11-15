import { Injectable, isDevMode } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from "./models";
import { TokenStorageService } from "./token-storage.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  REST_API: string = ""

  constructor(private http: HttpClient, private tokenService: TokenStorageService) {
    if (isDevMode()) {
      this.REST_API = 'http://localhost:3000/api';
    } else {
      this.REST_API = '/api';
    }
  }

  public authenticate(email: string, password: string) {
    return this.http.post<User>(`${this.REST_API}/user/authenticate`, { 'email': email, 'password': password })
  }

  public register(email: string, password: string, athlete_id: string) {
    return this.http.post<User>(`${this.REST_API}/user/register`, { 'email': email, 'password': password, 'athlete_id': athlete_id})
  }


  public isAuthenticated(): Boolean {
    var userData = this.tokenService.getUser()
    if (userData) {
      return true;
    }
    return false;
  }
}