import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { CrudService } from '../service/crud.service';
import { Athlete } from "../service/models";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  athletes!: Array<Athlete>;

  constructor(
    private crudService: CrudService
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
  }

  get emailField(): any {
    return this.registerForm.get('email');
  }
  get passwordField(): any {
    return this.registerForm.get('password');
  }
  get athleteField(): any {
    return this.athleteField.get('athlete');
  }
  
  registerFormSubmit(): void {

  }
}
