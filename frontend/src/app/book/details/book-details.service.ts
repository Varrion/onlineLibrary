import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Book} from "../../shared/models/Book";

@Injectable()
export class BookDetailsService {

  constructor (private http: HttpClient){}

  public bookDetails( id:number ):Observable<any>{
    return this.http.get(`http://localhost:8080/books/${id}`)
      .map ((response)=> response);
  }

  public deleteBook( id:number): Observable<any>{
    return this.http.delete(`http://localhost:8080/admin/delete/book/${id}`)
  }

  public updateBook (id:number, book:Book): Observable<any>{
    return this.http.delete(`http://localhost:8080/admin/edit/book/${id}`)
  }
}
