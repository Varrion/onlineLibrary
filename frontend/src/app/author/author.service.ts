import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import "rxjs/add/observable/interval";
import "rxjs/add/operator/take";
import "rxjs/add/operator/map";
import "rxjs/add/operator/bufferCount"

import {Author} from "../shared/models/Author";
import {error} from "selenium-webdriver";

@Injectable()
export class AuthorService {

  constructor (private http: HttpClient){

  }

  public getAuthors(): Observable<Author[]> {
    return this.http.get("http://localhost:8080/authors/all")
      .map((response) => response)

  }
  }

