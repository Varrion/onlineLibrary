import {Component, OnInit} from "@angular/core";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";
import {AddBookService} from "./add-book.service";

@Component({
  selector:'add-book',
  templateUrl:'add-book.component.html',
  providers:[AddBookService]
})

export class AddBookComponent implements OnInit{

  constructor (private router:Router, private toastr: ToastrService, private addBookService: AddBookService){}

  ngOnInit(): void {
  }

}
