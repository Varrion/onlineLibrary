import {Component, OnInit} from "@angular/core";
import {AppService} from "../app.service";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {LoginService} from "./login.service";
import {User} from "../shared/models/User";
import {forEach} from "@angular/router/src/utils/collection";

@Component ({
  selector:'login',
  templateUrl:'login.component.html',
  styleUrls: ['login.component.css'],
  providers:[LoginService]
})

export class LoginComponent implements OnInit{

  public users:User[];

  public user:User
  credentials = {username: '', password: ''};

  constructor(private app: AppService, private http: HttpClient, private router: Router) {
  }

  ngOnInit(): void {
    this.app.allUsers()
      .subscribe((value:User[]) =>{
        this.users = value;
        console.log("Users: ", this.users);
      })
  }

  public login() {

    for(let u of this.users){
      if ((u.username == this.credentials.username) && (u.password == this.credentials.password)) {
        this.app.authenticated = true;
        console.log("Authenticated: ", this.app.authenticated)
        this.router.navigate(['/']);
      }
    }
    this.app.authenticated = false;
  }


}
