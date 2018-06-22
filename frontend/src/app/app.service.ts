import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from "rxjs/Observable";

@Injectable()
export class AppService {

  authenticated = false;

  constructor(private http: HttpClient){}

  public allUsers():Observable<any>{
    return this.http.get('http://localhost:8080/users/all')
      .map((response) => response)
  }
}
