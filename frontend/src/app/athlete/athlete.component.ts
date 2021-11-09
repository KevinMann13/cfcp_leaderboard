import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CrudService } from '../service/crud.service';

@Component({
  selector: 'app-athlete',
  templateUrl: './athlete.component.html',
  styleUrls: ['./athlete.component.scss']
})
export class AthleteComponent implements OnInit {
  athlete:any

  constructor(
    private route: ActivatedRoute,
    private crudService: CrudService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(res => {
      this.crudService.GetAthleteByID(res.get('id')).subscribe(athlete => {
        console.log(athlete)
        this.athlete = athlete;
      });
    });  
  }

}
