import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { DisplaylistComponent } from './displaylist/displaylist.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Navbar2Component } from './navbar2/navbar2.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    DisplaylistComponent,
    NavbarComponent,
    Navbar2Component,
    DeliveryComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
