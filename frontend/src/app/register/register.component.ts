import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { CrudService } from '../service/crud.service';
import { Athlete } from "../service/models";
import { AuthService } from "../service/auth.service";
import { TokenStorageService } from "../service/token-storage.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  athletes!: Array<Athlete>;

  constructor(
    private crudService: CrudService,
    private authService: AuthService,
    private tokenService: TokenStorageService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.crudService.GetAthletes().subscribe(athletes => {
      this.athletes = athletes;
    })

    this.registerForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      athlete: new FormControl('', [Validators.required])
    })

    if (this.tokenService.getUser()) {
      this.router.navigate(["/", "profile"])
    }
  }

  get emailField(): any {
    return this.registerForm.get('email');
  }
  get passwordField(): any {
    return this.registerForm.get('password');
  }
  get athleteField(): any {
    return this.registerForm.get('athlete');
  }

  registerFormSubmit(): void {
    this.authService.register(this.registerForm.value.email, this.registerForm.value.password, this.registerForm.value.athlete).subscribe(
      data => {
        this.tokenService.saveUser(data)
        window.location.reload();
      },
      error => { console.log("ERROR:"); console.log(error) }
    )
  }
}
