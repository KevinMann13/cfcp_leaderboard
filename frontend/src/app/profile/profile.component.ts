import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CrudService } from '../service/crud.service';
import { RowingInputComponent } from "../rowing-input/rowing-input.component";

import { User } from "../service/models";
import { Router } from '@angular/router';
import { TokenStorageService } from '../service/token-storage.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user_profile!: User;
  rowingColumns = ['date', 'meters', 'proof'];
  attendanceColumns = ['date'];

  constructor(
    private crudService:CrudService,
    private dialog:MatDialog,
    private router:Router,
    private tokenService: TokenStorageService
  ) { }

  ngOnInit(): void {
    this.refreshProfile()
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(RowingInputComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.refreshProfile()
    });
  }

  refreshProfile(): void {
    this.crudService.GetProfile().subscribe(
      (user_profile) => {
      this.user_profile = user_profile
      console.log(this.user_profile)
    },
    (error) => {
      if (error.status == 401) {
        this.tokenService.signOut()
        this.router.navigate(["/", "login"])
      }
    }
    
    )
  }
}
