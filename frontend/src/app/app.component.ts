import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from './service/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit  {
  isLoggedIn = false;
  username!: string;

  constructor(
    public tokenStorageService: TokenStorageService
  ) {}

  ngOnInit(): void {
    const user = this.tokenStorageService.getUser();

    if (user) {
      this.isLoggedIn = true
      this.username = user.email;
    }
  }

  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}
