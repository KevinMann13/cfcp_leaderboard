import { Component, OnInit } from '@angular/core';
import { CrudService } from '../service/crud.service';

import { User } from "../service/models";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user_profile!: User;

  constructor(
    private crudService:CrudService
  ) { }

  ngOnInit(): void {
    console.log("HERE")
    this.crudService.GetProfile().subscribe(user_profile => {
      console.log("HERE2")
      this.user_profile = user_profile
      console.log(this.user_profile)
    })
  }

}
