import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { TeamComponent } from './team/team.component';
import { AthleteComponent } from './athlete/athlete.component';
import { EventsComponent } from './events/events.component';

const routes: Routes = [
  { path: 'leaderboard', component: LeaderboardComponent },
  { path: 'team/:id', component: TeamComponent },
  { path: 'athlete/:id', component: AthleteComponent },
  { path: 'events', component: EventsComponent },
  { path: '',   redirectTo: '/leaderboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
