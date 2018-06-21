import {Component, Input, OnInit} from "@angular/core";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {Category} from "../shared/models/Category";
import {Book} from "../shared/models/Book";
import {CategoryService} from "./category.service";

@Component({
  selector: 'category',
  templateUrl: 'category.component.html',
  providers: [CategoryService]
})
export class CategoryComponent implements OnInit {

  public books: Book[];
  public categoryId;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private categoryService: CategoryService) {
  }

  ngOnInit() {

    this.route.queryParams
      .subscribe((params: Params) => {
        this.categoryId= this.route.snapshot.queryParams['id'];
        this.categoryService.getBooksByCategoryId(this.categoryId)
          .subscribe((value:Book[]) => {
            this.books = value;
            console.log("Books: ", this.books);
          })
      });

  }
}
