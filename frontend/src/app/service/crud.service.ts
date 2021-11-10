import { Injectable, isDevMode} from '@angular/core';
import { Team, TeamScore } from './models';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  REST_API: string = ""
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private httpClient: HttpClient) {
    if (isDevMode()) {
      this.REST_API = 'http://localhost:3000/api';
    } else {
      this.REST_API = '/api';
    }
  }

  GetLeaderboard() {
    return this.httpClient.get<TeamScore[]>(`${this.REST_API}/team/leaderboard`);
  }

  GetTeams() {
    return this.httpClient.get(`${this.REST_API}/team`);
  }

  GetTeamByID(id: String|null) {
    return this.httpClient.get(`${this.REST_API}/team/${id}`);
  }

  GetAthleteByID(id: String|null) {
    return this.httpClient.get(`${this.REST_API}/athlete/${id}`);
  }

  // Error 
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Handle client error
      errorMessage = error.error.message;
    } else {
      // Handle server error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

}
