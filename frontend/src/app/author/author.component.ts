import {Component, OnInit} from "@angular/core";
import {AuthorService} from "./author.service";
import {Author} from "../shared/models/Author";
import {Publisher} from "../shared/models/Publisher";
import {Router} from "@angular/router";

@Component({
  selector: 'authors',
  templateUrl: 'author.component.html',
  providers: [AuthorService],
})

export class AuthorComponent implements OnInit{


  public authors:Author[];

  constructor( private authorService: AuthorService, private router: Router){
  }

  ngOnInit(): void {
    this.authorService.getAuthors()
      .subscribe((response) => {
        this.authors=response
      });

  }

  openAuthor(author: Author){

    this.authorService.getAuthor(author.id)
      .subscribe((value: Author) => {
        this.router.navigate([`author/${value.name}`], {queryParams: {id: value.id}});
      })

  }

}
