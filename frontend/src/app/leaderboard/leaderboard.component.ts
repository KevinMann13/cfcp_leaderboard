import { Component, OnInit } from '@angular/core';
import { CrudService } from '../service/crud.service';
import { EChartsOption, LegendComponentOption } from 'echarts';
import { TeamScore } from '../service/models';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.scss']
})
export class LeaderboardComponent implements OnInit {

  constructor(
    private crudService: CrudService
  ) { }

  team_scores:TeamScore[] = [];

  chartOption: EChartsOption = {
    xAxis: {
      type: 'category',
      data: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        name: "hello",
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
      },
      {
        name: "world",
        data: [100, 259, 300, 350, 420, 560, 800],
        type: 'line',
      },
    ],
  };

  mergeOption: any;

  ngOnInit() {
    this.crudService.GetLeaderboard().subscribe(team_scores => {
      console.log(team_scores)
      this.team_scores = team_scores;
      
      var names:String[] = []
      var scores: Object[] = []

      team_scores.forEach((team) => {
        names.push(team.name)
        scores.push({
            name: team.name,
            data: [team.score],
            type: 'line',
          })
      })
      
      this.mergeOption = {legend: {data: names}, series: scores}
    });
  }

}
