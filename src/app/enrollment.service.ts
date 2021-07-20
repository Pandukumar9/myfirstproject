import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {throwError} from 'rxjs';
import { Users } from './tdf/users';


@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {

  _Url ='http://localhost:3000/enroll';
  constructor(private _http: HttpClient) { }
  enroll(users: Users){
    return this._http.post<any>(this._Url, users)
    .pipe(catchError(this.errorHandler))
  }
  errorHandler(error: HttpErrorResponse){
      return throwError(error);
  }
}
