import { Component, OnInit } from '@angular/core';
import { CrudService } from './service/crud.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    private crudService: CrudService
  ) {}

  Teams:any = [];

  ngOnInit() {
    this.crudService.GetTeams().subscribe(teams => {
      this.Teams = teams;
    });
  }
}
