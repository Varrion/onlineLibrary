import {Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import 'rxjs/add/operator/finally';
import {AppService} from "./app.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent implements OnInit {

  ngOnInit(): void {
    console.log("Authenticated on Init:", this.app.authenticated);
  }

  constructor(private app: AppService, private http: HttpClient, private router: Router) {}

  logout() {
      this.app.authenticated = false;
      console.log("Logout auth",this.app.authenticated)
      this.router.navigateByUrl('/login');
  }


}
