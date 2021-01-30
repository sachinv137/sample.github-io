import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RapperComponent } from './custom-container/rapper/rapper.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TopNavComponent } from './custom-container/rapper/top-nav/top-nav.component';
import { HomeComponentComponent } from './custom-container/rapper/home-component/home-component.component';
import { AboutComponent } from './custom-container/rapper/about/about.component';
import { ContactComponent } from './custom-container/rapper/contact/contact.component';
import { PageNotFoundComponent } from './custom-container/rapper/page-not-found/page-not-found.component';
import { MyserviceService } from './custom-container/rapper/myservice/myservice.service';
import { HttpClientModule } from '@angular/common/http';
import { SigninComponent } from './custom-container/rapper/signin/signin.component';
import { HeaderServiceService } from './custom-container/rapper/myservice/header-service.service';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
@NgModule({
  declarations: [
    AppComponent,
    RapperComponent,
    TopNavComponent,
    HomeComponentComponent,
    AboutComponent,
    ContactComponent,
    PageNotFoundComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    LoadingBarRouterModule
  ],
  providers: [MyserviceService, HeaderServiceService ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(){
    console.log("App module loaded");
  }
}
