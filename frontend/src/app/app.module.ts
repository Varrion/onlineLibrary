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
    AddAuthorComponent
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
      { path: 'admin/add-author', component: AddAuthorComponent}
    ])
  ],
  providers: [{ provide: LocationStrategy, useClass: PathLocationStrategy  }, /*AppService*/],
  bootstrap: [AppComponent]
})
export class AppModule { }
