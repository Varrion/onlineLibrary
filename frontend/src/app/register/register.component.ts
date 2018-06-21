import {Component} from "@angular/core";
import {RegisterService} from "./register.service";
import {User} from "../shared/models/User";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";

@Component({
  selector: "register",
  templateUrl: "register.component.html",
  providers:[RegisterService]
})

export class RegisterComponent{

  public user: User;

  public username;
  public password;
  public name;
  public surname;
  public phone;
  public address;
  public email;
  public isAdmin = false;


  constructor (private router: Router, private registerService : RegisterService, private toastr: ToastrService){}

  public registerUser(){

    this.user = new User();
    this.user.username = this.username;
    this.user.password = this.password;
    this.user.name = this.name;
    this.user.surname = this.surname;
    this.user.phone = this.phone;
    this.user.address = this.address;
    this.user.email = this.email;
    this.user.isAdmin = this.isAdmin;

    this.registerService.registerUser(this.user)
      .subscribe(() => {
        this.toastr.success("Your registration is succesfull");
        this.router.navigate([`/`]);
      })
  }

}
