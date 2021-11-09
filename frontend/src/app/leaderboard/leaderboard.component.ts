import { Component, OnInit } from '@angular/core';
import { CrudService } from '../service/crud.service';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.scss']
})
export class LeaderboardComponent implements OnInit {

  constructor(
    private crudService: CrudService
  ) { }

  team_scores:any = [];

  ngOnInit() {
    this.crudService.GetLeaderboard().subscribe(team_scores => {
      console.log(team_scores)
      this.team_scores = team_scores;
    });
  }

}
