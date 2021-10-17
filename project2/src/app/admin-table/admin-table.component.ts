
import { Component, OnInit, ViewChild } from '@angular/core';
import { CrudService } from '../crud.service';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-admin-table',
  templateUrl: './admin-table.component.html',
  styleUrls: ['./admin-table.component.css']
})
export class AdminTableComponent implements OnInit {
  
  public customers:{
    cust_id : string,
    cust_name : string,
    cust_address : string,
    cust_number : string,
    my_policies : string,
    
      }[]=[];
  public customersId:any=[];
  updateid:any;
  searchId:any;
  constructor(private crudService:CrudService,private httpService:HttpService) { }

  show:boolean=false;

  ngOnInit(): void {
   
    this.crudService.getCustomers().subscribe(data => {
      this.customers=data;
      console.log(data)
     
    });
    
   
    
    console.log(this.customers);
  }

  onDelete(id){
    // this.updateid=this.id.sourceSpan;

    console.log(id.innerText);
    this.httpService.onDelete(id.innerText);
  }
  
  
}
