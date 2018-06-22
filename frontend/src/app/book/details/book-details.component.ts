import {Component, OnInit} from "@angular/core";
import {BookDetailsService} from "./book-details.service";
import {Book} from "../../shared/models/Book";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {Publisher} from "../../shared/models/Publisher";
import {LandingService} from "../../landingpage/landing.service";
import {Author} from "../../shared/models/Author";
import {AuthorService} from "../../author/author.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector:'book',
  templateUrl:'book-details.component.html',
  providers:[BookDetailsService, LandingService, AuthorService]
})

export class BookDetailsComponent implements OnInit{

  constructor (private router: Router, private toastr: ToastrService, private bookDetailsService: BookDetailsService, private authorService: AuthorService, private route: ActivatedRoute, private landingService: LandingService){}

  public bookId;
  public book:Book;
  public newTitle;

  ngOnInit(): void {
    this.route.queryParams
      .subscribe((params: Params) => {
        this.bookId= this.route.snapshot.queryParams['id'];

        this.bookDetailsService.bookDetails(this.bookId)
          .subscribe((value:Book) => {
            this.book = value;
            console.log("Book: ", this.book);
          })
      });
  }

  public openPublisher(publisher: Publisher){

    this.landingService.getPublisher(publisher.id)
      .subscribe((value: Publisher) => {
        this.router.navigate([`publisher/${value.name}`], {queryParams: {id: value.id}});
      })
  }

  public openAuthor (author: Author) {
    this.authorService.getAuthor(author.id)
      .subscribe((value: Author) => {
        this.router.navigate([`author/${value.name}`], {queryParams: {id: value.id}});
      })

  }

  public deleteBook (bookId){

    this.bookDetailsService.deleteBook(bookId)
      .subscribe(() =>{
        this.toastr.info("Book was succesfully deleted")
        this.router.navigate(['authors']);
      })
  }

  editBook(bookId, book:Book){

    this.bookDetailsService.updateBook(bookId, book)
      .subscribe(()=>{
        this.toastr.info("Book was succesfully updates")
      })
  }




}
