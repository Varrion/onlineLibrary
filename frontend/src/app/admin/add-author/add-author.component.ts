import {Component, OnInit} from "@angular/core";
import {AddAuthorService} from "./add-author.service";
import {Author} from "../../shared/models/Author";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";

@Component ({
  selector:'add-author',
  templateUrl:'add-author.component.html',
  providers:[AddAuthorService]
})

export class AddAuthorComponent  implements OnInit{

  public countries;

  public author : Author;

  public name;
  public description;
  public selectedCountry;

  constructor(private addAuthorService: AddAuthorService, private router:Router, private toastr: ToastrService){}

  ngOnInit(): void {
    this.addAuthorService.allCountries()
      .subscribe( value => {
        this.countries = value;
        console.log("Countries: ",this.countries)
      })
  }

    public addAuthor(){
    this.author = new Author();
    this.author.name = this.name;
    this.author.description = this.description;
    this.author.country = this.selectedCountry;

    this.addAuthorService.addAuthor(this.author)
      .subscribe(()=> {
        this.toastr.success("New Author created");
        this.router.navigate(['/'])
      })

    }

}
