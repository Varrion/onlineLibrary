import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {AboutUsComponent} from "./about-us/about-us.component";
import {HttpModule} from "@angular/http";
import { HttpClientModule } from '@angular/common/http';
import {RouterModule} from "@angular/router";
import {AuthorComponent} from "./author/author.component";
import {BookComponent} from "./book/book.component";
import {LandingComponent} from "./landingpage/landing.component";
import { AgmCoreModule } from '@agm/core'
import {HashLocationStrategy, LocationStrategy, PathLocationStrategy} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {AuthorService} from "./author/author.service";
import {CategoryComponent} from "./category/category.component";
import {RegisterComponent} from "./register/register.component";
import {LoginComponent} from "./login/login.component";
import {PublisherComponent} from "./publisher/publisher.component";
import {AddAuthorComponent} from "./admin/add-author/add-author.component";
import {ToastrModule} from "ngx-toastr";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AddPublisherComponent} from "./admin/add-publisher/add-publisher.component";
import {AddCategoryComponent} from "./admin/add-category/add-category.component";
import {AddBookComponent} from "./admin/add-book/add-book.component";
import {AppService} from "./app.service";
import {BookDetailsComponent} from "./book/details/book-details.component";
import {AuthorDetailsComponent} from "./author/details/author-details.component";



@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    AuthorComponent,
    BookComponent,
    LandingComponent,
    CategoryComponent,
    RegisterComponent,
    LoginComponent,
    PublisherComponent,
    AddAuthorComponent,
    AddPublisherComponent,
    AddCategoryComponent,
    AddBookComponent,
    BookDetailsComponent,
    AuthorDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBLI3YmL36hjL8xRoTngR5Ew7ec-GiH9CE'
    }),
    RouterModule.forRoot([
      { path:'', component: LandingComponent },
      { path: 'about-us', component: AboutUsComponent },
      { path: 'books', component: BookComponent },
      { path: 'authors', component: AuthorComponent },
      { path: 'category/:name', component: CategoryComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'login', component: LoginComponent },
      { path: 'publisher/:name', component: PublisherComponent },
      { path: 'admin/add-author', component: AddAuthorComponent},
      { path: 'admin/add-publisher', component: AddPublisherComponent},
      { path: 'admin/add-category', component: AddCategoryComponent},
      { path: 'admin/add-book', component: AddBookComponent},
      { path: 'book/:name', component: BookDetailsComponent },
      { path: 'author/:name', component: AuthorDetailsComponent}
    ])
  ],
  providers: [ AppService, { provide: LocationStrategy, useClass: PathLocationStrategy  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
