import { Component, OnInit } from '@angular/core';
import { CrudService } from './service/crud.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private crudService: CrudService
  ) {}

  Teams:any = [];

  ngOnInit() {
    console.log("HELLO WORLD")
    this.crudService.GetTeams().subscribe(teams => {
      this.Teams = teams;
    });
  }
}
