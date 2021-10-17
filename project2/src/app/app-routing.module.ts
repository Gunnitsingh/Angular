import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminTableComponent } from './admin-table/admin-table.component';

import { AdmineditformComponent } from './admineditform/admineditform.component';
import { ClaimfromComponent } from './claimfrom/claimfrom.component';
import { ClientformComponent } from './clientform/clientform.component';
import { CustomerCareDisplayDetailsComponent } from './customer-care-display-details/customer-care-display-details.component';
import { CustomerCareComponent } from './CustomerCare/CustomerCare.component';
import { EnterCustomerIdComponent } from './enter-customer-id/enter-customer-id.component';
import { HeaderImgComponent } from './header-img/header-img.component';

const routes: Routes = [
   {path:'',component:HeaderImgComponent},
   {path:"admin", component:AdminTableComponent,children:[{path:":id",component:AdmineditformComponent}]},
  
  
  
  {
    path:'detail', component:CustomerCareDisplayDetailsComponent
  },
  {
    path:'contactUs', component:CustomerCareComponent
  },
  {
    path:'clientForm', component:ClientformComponent
  },
  {
    path:'claim', component:ClaimfromComponent
  },
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
