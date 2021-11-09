import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CrudService } from '../service/crud.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
  team:any 

  constructor(
    private route: ActivatedRoute,
    private crudService: CrudService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(res => {
      this.crudService.GetTeamByID(res.get('id')).subscribe(team => {
        this.team = team;
      });
    });    
  }

}
