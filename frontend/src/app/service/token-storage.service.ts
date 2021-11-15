import { Injectable } from '@angular/core';
import { User } from "./models";

const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor() { }

  signOut(): void {
    window.sessionStorage.clear();
  }

  public saveUser(user:User): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public getUser(): User|null {
    var user = sessionStorage.getItem(USER_KEY)
    if (user != null) {
      return JSON.parse(user);
    } else {
      return null
    }
  }
}
