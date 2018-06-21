import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {HttpClient} from "@angular/common/http";
import {Category} from "../shared/models/Category";

@Injectable()
export class LandingService {

  constructor(private http: HttpClient){
  }

  public getPublishers(): Observable <any> {
    return this.http.get(`http://localhost:8080/publishers/all`)
      .map((response) => response)
  }

  public getCategories(): Observable <any>{
    return this.http.get(`http://localhost:8080/categories/all`)
      .map((response) => response)
  }

  public getCategory(id: number): Observable<any>{
    return this.http.get(`http://localhost:8080/categories/${id}`)
      .map((response) => response)
  }

  public getPublisher (id: number): Observable<any>{
    return this.http.get(`http://localhost:8080/publishers/${id}`)
      .map((response) => response)
  }

}
