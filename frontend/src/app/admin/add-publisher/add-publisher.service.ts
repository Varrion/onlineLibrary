import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Publisher} from "../../shared/models/Publisher";

@Injectable()
export class AddPublisherService {

  constructor (private http: HttpClient){}

  public addPublisher(publisher: Publisher): Observable<any>{
    return this.http.post('http://localhost:8080/admin/add/publisher', publisher)
      .map((response) => response)
  }



}
