import {Component, OnInit} from "@angular/core";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";
import {AddBookService} from "./add-book.service";
import {LandingService} from "../../landingpage/landing.service";
import {Author} from "../../shared/models/Author";
import {Category} from "../../shared/models/Category";
import {Publisher} from "../../shared/models/Publisher";
import {Book} from "../../shared/models/Book";

@Component({
  selector:'add-book',
  templateUrl:'add-book.component.html',
  providers:[AddBookService, LandingService]
})

export class AddBookComponent implements OnInit{

  public authors:Author[];
  public categories: Category[];
  public publishers: Publisher[];
  public book:Book;

  public bookTitle;
  public bookDescription;
  public bookPages;
  public bookPrice;
  public bookStock;
  public selectedAuthor;
  public selectedCategory;
  public selectedPublisher;


  constructor (private router:Router, private toastr: ToastrService, private addBookService: AddBookService){}

  ngOnInit(): void {

    this.addBookService.getAuthors()
      .subscribe((value:Author[])=> {
        this.authors = value;
      })

    this.addBookService.getCategories()
      .subscribe((value:Category[])=> {
        this.categories = value;
      })

    this.addBookService.getPublishers()
      .subscribe((value:Publisher[])=> {
        this.publishers = value;
      })
  }

  public addBook(){

    this.book = new Book();

    this.book.title = this.bookTitle;
    this.book.description = this.bookDescription;
    this.book.pages = this.bookPages;
    this.book.price = this.bookPrice;
    this.book.stock = this.bookStock;
    this.book.author = this.selectedAuthor;
    this.book.category = this.selectedCategory;
    this.book.publisher = this.selectedPublisher;

    this.addBookService.addBook(this.book)
      .subscribe(()=> {
        this.toastr.success("Adding Book is Succesfull");
        this.router.navigate(['/'])
      })



  }

}
