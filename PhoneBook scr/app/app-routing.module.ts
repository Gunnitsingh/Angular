import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { ContactsComponent } from './contacts/contacts.component';

const routes: Routes = [{path:"",component:AddComponent},
{path:"contact",component:ContactsComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
