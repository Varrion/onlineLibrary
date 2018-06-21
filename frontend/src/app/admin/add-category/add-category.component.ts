import {Component, OnInit} from "@angular/core";
import {AddCategoryService} from "./add-category.service";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";
import {Category} from "../../shared/models/Category";

@Component({
  selector:'add-category',
  templateUrl:'add-category.component.html',
  providers:[AddCategoryService]
})

export class AddCategoryComponent implements OnInit{

  constructor (private router:Router, private toastr: ToastrService, private addCategoryService: AddCategoryService){}

  public category: Category;
  public categoryName;

  ngOnInit(): void {
  }

  addCategory(){

    this.category = new Category();

    this.category.name = this.categoryName;

    this.addCategoryService.addCategory(this.category)
      .subscribe(() => {
        this.toastr.success("New Category added");
        this.router.navigate(['/'])
      })

  }

}
