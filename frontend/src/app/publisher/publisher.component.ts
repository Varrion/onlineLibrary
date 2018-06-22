import {Component, OnInit} from "@angular/core";
import {PublisherService} from "./publisher.service";
import {Publisher} from "../shared/models/Publisher";
import {ActivatedRoute, Params, Route, Router} from "@angular/router";
import {Book} from "../shared/models/Book";
import {LandingService} from "../landingpage/landing.service";

@Component({
  selector:'publisher',
  templateUrl:'publisher.component.html',
  providers: [PublisherService, LandingService]
})

export class PublisherComponent implements OnInit {
  public publisherId;
  public publisher:Publisher;
  public books: Book[];
  constructor (private route: ActivatedRoute,private router:Router, private publisherService: PublisherService, private landingService: LandingService){}

  ngOnInit() {

    this.route.queryParams
      .subscribe((params: Params) => {
        this.publisherId= this.route.snapshot.queryParams['id'];

        this.landingService.getPublisher(this.publisherId)
          .subscribe((value:Publisher) => {
            this.publisher = value;
            console.log("Publisher: ", this.publisher);

            this.publisherService.getBooksByPublisher(this.publisher.id)
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
