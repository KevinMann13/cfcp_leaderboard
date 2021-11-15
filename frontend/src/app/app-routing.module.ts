import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { TeamComponent } from './team/team.component';
import { AthleteComponent } from './athlete/athlete.component';
import { EventsComponent } from './events/events.component';
import { ProfileComponent } from "./profile/profile.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";

import { AuthGuardService } from "./service/auth-guard.service";

const routes: Routes = [
  { path: 'leaderboard', component: LeaderboardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuardService] },
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
