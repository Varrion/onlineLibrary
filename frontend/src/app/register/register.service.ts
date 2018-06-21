import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {User} from "../shared/models/User";

@Injectable()
export class RegisterService {
  constructor (private http: HttpClient){}

  public registerUser (user: User): Observable <any>{
    return this.http.post("http://localhost:8080/register/user", user)
      .map((response) => response)
  }
}
