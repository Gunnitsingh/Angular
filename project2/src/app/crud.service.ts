import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CrudService {
  private _url:string="http://localhost:3000/user";
  //private _url1:string="assets/data/server.json";
  
  constructor(private httpClient:HttpClient) { }
  getCustomers(){
    
  return this.httpClient.get<{cust_id:string,cust_name:string,cust_address:string,cust_number:string,my_policies:string}[]>(this._url);
  }
  

  
}
