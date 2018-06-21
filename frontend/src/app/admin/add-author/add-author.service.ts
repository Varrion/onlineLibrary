import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Author} from "../../shared/models/Author";

@Injectable()
export class AddAuthorService {

  constructor (private http: HttpClient){}

  public addAuthor(author: Author): Observable<any>{
    return this.http.post('http://localhost:8080/admin/add/author', author)
      .map((response) => response)
  }

  public allCountries ():Observable <any> {
    return this.http.get('https://restcountries.eu/rest/v2/region/europe')
      .map((response) => response)
  }

}
