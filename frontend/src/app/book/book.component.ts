import {Component, OnInit} from "@angular/core";
import {BookService} from "./book.service";
import {Book} from "../shared/models/Book";

@Component({
  selector: 'books',
  templateUrl: 'book.component.html',
  providers: [BookService]
})

export class BookComponent implements OnInit{

  public books: Book[];

  constructor (private bookService: BookService){}

  ngOnInit(): void {

    this.bookService.getBooks()
      .subscribe( (value : Book[]) => {
        this.books = value;
      })
  }




}
