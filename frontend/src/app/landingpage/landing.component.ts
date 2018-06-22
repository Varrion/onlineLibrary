import {Component, OnInit} from "@angular/core";
import {LandingService} from "./landing.service";
import {Publisher} from "../shared/models/Publisher";
import {Category} from "../shared/models/Category";
import {Router} from "@angular/router";

@Component ({
  selector: 'home',
  templateUrl: 'landing.component.html',
  providers: [LandingService]
})

export  class LandingComponent implements OnInit{

  public  publishers: Publisher[];
  public categories: Category[];

  constructor (  private landingService: LandingService,
                 private router: Router){}

  ngOnInit(): void {

    this.landingService.getPublishers()
      .subscribe((response) => {
        this.publishers = response;
      })
    this.landingService.getCategories()
      .subscribe((response) => {
        this.categories = response;
      })
  }

  public openCategory (category: Category){

    this.landingService.getCategory(category.id)
      .subscribe((value: Category) => {
        this.router.navigate([`category/${value.name}`], {queryParams: {id: value.id}});
      })
  }

  public openPublisher(publisher: Publisher){

    this.landingService.getPublisher(publisher.id)
      .subscribe((value: Publisher) => {
        this.router.navigate([`publisher/${value.name}`], {queryParams: {id: value.id}});
      })
  }


}
