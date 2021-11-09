import { Injectable, isDevMode} from '@angular/core';
import { Team } from './Team';
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

  GetTeams() {
    console.log("WOW!")
    return this.httpClient.get(`${this.REST_API}/team`);
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
