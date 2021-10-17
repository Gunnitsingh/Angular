import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import  {HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientformComponent } from './clientform/clientform.component';
import { ClaimfromComponent } from './claimfrom/claimfrom.component';
import { HttpComponent } from './http/http.component';
import { AdminTableComponent } from './admin-table/admin-table.component';
import { AdmineditformComponent } from './admineditform/admineditform.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CardsComponent } from './cards/cards.component';
import { HeaderImgComponent } from './header-img/header-img.component';
import { PlansComponent } from './plans/plans.component';
import { RatingComponent } from './rating/rating.component';
import { CustomerCareComponent } from './CustomerCare/CustomerCare.component';
import { CustomerCareDisplayDetailsComponent } from './customer-care-display-details/customer-care-display-details.component';
import { EnterCustomerIdComponent } from './enter-customer-id/enter-customer-id.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientformComponent,
    ClaimfromComponent,
    HttpComponent,
    AdminTableComponent,
    AdmineditformComponent,
    HeaderComponent,
    FooterComponent,
    CarouselComponent,
    CardsComponent,
    HeaderImgComponent,
    PlansComponent,
    RatingComponent,
    CustomerCareComponent,
    CustomerCareDisplayDetailsComponent,
    EnterCustomerIdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
