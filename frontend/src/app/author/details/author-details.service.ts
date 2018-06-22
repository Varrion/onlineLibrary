import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class AuthorDetailsService {

  constructor (private http: HttpClient){
  }

  public getBooksByAuthor ( id: number ): Observable <any> {
    return this.http.get(`http://localhost:8080/books/by-author/${id}`)
      .map((response) => response)
  }

}
