import { Injectable, isDevMode} from '@angular/core';
import { Team, TeamScore, Athlete, User, RowingScore } from './models';
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

  GetRowingLeaderboard() {
    return this.httpClient.get<RowingScore[]>(`${this.REST_API}/row/leaderboard`);
  }

  GetTeams() {
    return this.httpClient.get(`${this.REST_API}/team`);
  }

  GetTeamByID(id: String|null) {
    return this.httpClient.get(`${this.REST_API}/team/${id}`);
  }

  GetAthletes() {
    return this.httpClient.get<Athlete[]>(`${this.REST_API}/athlete`);
  }

  GetAthleteByID(id: String|null) {
    return this.httpClient.get(`${this.REST_API}/athlete/${id}`);
  }

  GetProfile() {
    return this.httpClient.get<User>(`${this.REST_API}/user/profile`);
  }

  AddRow(date:Date, meters:number, image: File) {
    const formData: FormData = new FormData();

    formData.append('file', image);
    formData.append('date', date.toString());
    formData.append('meters', meters.toString());


    return this.httpClient.post(`${this.REST_API}/row`, formData);
  }


  // upload(file: File) {
  //   const formData: FormData = new FormData();

  //   formData.append('file', file);

  //   const req = new HttpRequest('POST', `${this.baseUrl}/upload`, formData, {
  //     reportProgress: true,
  //     responseType: 'json'
  //   });

  //   return this.http.request(req);
  // }

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
