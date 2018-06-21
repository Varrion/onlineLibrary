import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class PublisherService {

  constructor (private http: HttpClient){}

  public getBooksByPublisher(id:number):Observable<any>{
    return this.http.get(`http://localhost:8080/books/by-publisher/${id}`)
      .map((response) => response)
  }

}
