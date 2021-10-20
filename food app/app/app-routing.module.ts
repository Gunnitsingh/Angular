import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { DisplaylistComponent } from './displaylist/displaylist.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [{path:"",component:HomeComponent},
{path:"display", component:DisplaylistComponent},
{path:"cart/:id" , component:CartComponent},
{path:"delivery", component:DeliveryComponent},
{path:"login" , component:LoginComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
