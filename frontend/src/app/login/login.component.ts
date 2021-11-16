import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from "../service/auth.service";
import { TokenStorageService } from '../service/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  error_message!: string

  constructor(
    private authService: AuthService,
    private tokenService: TokenStorageService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    })

    if (this.tokenService.getUser()) {
      this.router.navigate(["/", "profile"])
    }
  }

  get emailField(): any {
    return this.loginForm.get('email');
  }
  get passwordField(): any {
    return this.loginForm.get('password');
  }

  loginFormSubmit(): void {
    this.error_message = ""
    this.authService.authenticate(this.loginForm.value.email, this.loginForm.value.password).subscribe(
      (response) => {
        this.tokenService.saveUser(response);
        window.location.reload();
      },
      (error) => {
        console.log(error)
        this.error_message = error.error
      }
    )
  }
}
