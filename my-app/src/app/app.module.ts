import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ListBeersComponent } from './list-beers/list-beers.component';
import { CartComponent } from './cart/cart.component';
import { ContainerBeersCartComponent } from './container-beers-cart/container-beers-cart.component';
import { RequestsService } from './requests.service';
import { SalesComponent } from './sales/sales.component';
import { PhotosComponent } from './photos/photos.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ListBeersComponent,
    CartComponent,
    ContainerBeersCartComponent,
    SalesComponent,
    PhotosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    RequestsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
