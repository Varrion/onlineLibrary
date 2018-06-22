import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {User} from "../shared/models/User";

@Injectable()
export class LoginService {

  constructor(private http: HttpClient) {
  }

  public authenticate(user:User): Observable<any>{
    return this.http.post('http://localhost:8080/users/login', user)
      .map((response) => response)
  }
}
