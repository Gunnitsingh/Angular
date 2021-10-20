import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  restList:{id:any,rest_name:string,rest_address:string,rest_number:string,amount:any}[]=[];
  constructor(private http:HttpClient, private route:ActivatedRoute, private httpservice:HttpService) { }
id:any;
  ngOnInit(): void {
    this.httpservice.onGet().subscribe(data=>{
      this.restList = data
    })
   
    
   this.route.snapshot.params["id"];
    this.route.params.subscribe((param:Params)=>{
      this.id=param["id"]
    })
     

}
}
