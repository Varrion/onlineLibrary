import {Component, OnInit} from "@angular/core";
import {BookService} from "./book.service";
import {Book} from "../shared/models/Book";
import {Router} from "@angular/router";

@Component({
  selector: 'books',
  templateUrl: 'book.component.html',
  providers: [BookService]
})

export class BookComponent implements OnInit{

  public books: Book[];

  constructor (private bookService: BookService , private router: Router){}

  ngOnInit(): void {

    this.bookService.getBooks()
      .subscribe( (value : Book[]) => {
        this.books = value;
      })
  }

  bookDetails(book){
    this.router.navigate([`book/${book.title}`], {queryParams: {id: book.id}});
  }




}
