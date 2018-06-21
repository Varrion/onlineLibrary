import {Component, OnInit} from "@angular/core";
import {AuthorService} from "./author.service";
import {Author} from "../shared/models/Author";

@Component({
  selector: 'authors',
  templateUrl: 'author.component.html',
  providers: [AuthorService],
})

export class AuthorComponent implements OnInit{


  public authors:Author[];

  constructor( private authorService: AuthorService){
  }

  ngOnInit(): void {
    this.authorService.getAuthors()
      .subscribe((response) => {
        this.authors=response
      });

  }

}
