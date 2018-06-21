import {Component, OnInit} from "@angular/core";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";
import {AddPublisherService} from "./add-publisher.service";
import {Publisher} from "../../shared/models/Publisher";

@Component({
  selector:'add-publisher',
  templateUrl:'add-publisher.component.html',
  providers:[AddPublisherComponent]
})

export class AddPublisherComponent implements OnInit{

  public publisher: Publisher;

  public publisherName;
  public publisherInfo;
  public publisherAddress;
  public publisherUrl;



  constructor (private router:Router, private toastr: ToastrService, private addPublisherService: AddPublisherService){}

  ngOnInit(): void {

  }

  addPublisher(){
    this.publisher = new Publisher();

    this.publisher.name = this.publisherName;
    this.publisher.info = this.publisherInfo;
    this.publisherAddress = this.publisherAddress;
    this.publisher.url = this.publisherUrl

    this.addPublisherService.addPublisher(this.publisher)
      .subscribe(() => {
        this.toastr.success("New Publisher added");
        this.router.navigate(['/'])
      })


  }

}
