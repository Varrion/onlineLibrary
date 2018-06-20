import {Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import 'rxjs/add/operator/finally';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent implements OnInit {

  public myDate : Date

  ngOnInit(): void {
    setInterval(() => {         //replaced function() by ()=>
      this.myDate = new Date();
      console.log(this.myDate); // just testing if it is working
    }, 1000);
  }


}
