import {Component, OnInit} from "@angular/core";
import {AuthorService} from "./author.service";
import {Author} from "../shared/models/Author";

@Component({
  selector: 'authors',
  templateUrl: 'author.component.html',
  providers: [AuthorService],
})

export class AuthorComponent implements OnInit{


  public author:Author[];

  constructor( private authorService: AuthorService){
  }

  ngOnInit(): void {
    console.log("Se izvrsuva init");
    this.authorService.getAuthors()
      .subscribe((response) => {
        this.author=response,
        console.log("Authors: ", this.author);
      });

  }

}
