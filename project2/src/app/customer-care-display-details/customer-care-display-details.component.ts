import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-customer-care-display-details',
  templateUrl: './customer-care-display-details.component.html',
  styleUrls: ['./customer-care-display-details.component.css']
})
export class CustomerCareDisplayDetailsComponent implements OnInit {
  localvalue: any;

  constructor(private http:HttpService, private httpclient:HttpClient) { }

  fdata:any=[];
  disabled1=true;
  

  
  
  ngOnInit(): void {
    this.localvalue =localStorage.getItem('id');
    console.log(this.localvalue);
    
    
    this.httpclient.get<{
      cust_id : string,
      cust_name : string,
      cust_address : string,
      cust_number : string,
      my_policies : string,
      
        }[]>("http://localhost:3000/user").subscribe(post=>{
      this.fdata = post;
      console.log(this.fdata);
      console.log("customer");
    });
      
   
      console.log(this.fdata);
      console.log(typeof(this.localvalue));
      //localStorage.clear();
    
  }
  
 


}
