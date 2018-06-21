import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Category} from "../../shared/models/Category";

@Injectable()
export class AddCategoryService {

  constructor (private http: HttpClient){}

  public addCategory(category: Category): Observable<any>{
    return this.http.post('http://localhost:8080/admin/add/category', category)
      .map((response) => response)
  }




}
