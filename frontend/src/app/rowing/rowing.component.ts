import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RowingInputComponent } from '../rowing-input/rowing-input.component';
import { AuthService } from '../service/auth.service';
import { CrudService } from '../service/crud.service';
import { RowingScore } from '../service/models';

@Component({
  selector: 'app-rowing',
  templateUrl: './rowing.component.html',
  styleUrls: ['./rowing.component.scss']
})
export class RowingComponent implements OnInit {
  rows!:RowingScore[]
  isLoggedIn!:Boolean

  constructor(
    private crudService: CrudService,
    private dialog:MatDialog,
    private authService:AuthService
  ) { }

  ngOnInit(): void {
    this.getLeaderboard()
    this.isLoggedIn = this.authService.isAuthenticated()
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(RowingInputComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(() => {
      this.getLeaderboard()
    });
  }

  getLeaderboard(){
    this.crudService.GetRowingLeaderboard().subscribe(rows => {
      this.rows = rows
    })
  }

}
