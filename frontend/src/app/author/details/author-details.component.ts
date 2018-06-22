import {Component, OnInit} from "@angular/core";
import {AuthorDetailsService} from "./author-details.service";
import {ActivatedRoute, Params, Route, Router} from "@angular/router";
import {Book} from "../../shared/models/Book";
import {Author} from "../../shared/models/Author";
import {AuthorService} from "../author.service";


@Component({
  selector: 'author',
  templateUrl:'author-details.component.html',
  providers:[AuthorDetailsService, AuthorService]
})

export class AuthorDetailsComponent implements OnInit{

  constructor (private authorService: AuthorService, private authordetailsService: AuthorDetailsService, private router: Router, private route: ActivatedRoute){}

  authorid

  author:Author;

  books:Book[];

  ngOnInit(): void {

    this.route.queryParams
      .subscribe((params: Params) => {
        this.authorid= this.route.snapshot.queryParams['id'];

        this.authorService.getAuthor(this.authorid)
          .subscribe((value: Author) => {
            this.author = value
            console.log("Book: ", this.author);

            this.authordetailsService.getBooksByAuthor(this.author.id)
              .subscribe((value:Book[]) => {
                this.books = value;
                console.log("Books: ", this.books);
              })
          })
      });
  }

  public openBook(book){
    this.router.navigate([`book/${book.title}`], {queryParams: {id: book.id}});
  }



}
