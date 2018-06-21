import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Book} from "../../shared/models/Book";

@Injectable()
export class AddBookService {

  constructor (private http: HttpClient){}

  public addBook(book: Book): Observable<any>{
    return this.http.post('http://localhost:8080/admin/add/book', book)
      .map((response) => response)
  }


}
