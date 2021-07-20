import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { IEmployee } from '../employee';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class EmployeeService {

   _url:string = "../assets/data/employees.json";

  constructor(private _http: HttpClient) { }

  getEmployees(): Observable<IEmployee[]>{
     return this._http.get<IEmployee[]>(this._url)
     .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse){
    return throwError(error.message || "Unknown server error");
  }
}
