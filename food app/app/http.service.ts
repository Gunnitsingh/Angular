import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class HttpService {
  restList:{id:any,rest_name:string,rest_address:string,rest_number:string,amount:any}[]=[];
  constructor(private http:HttpClient) { }
  onGet(){
    
    return this.http.get<{id:any,rest_name:string,rest_address:string,rest_number:string,amount:any}[]>
    ("http://localhost:3000/restaurants")
    }
   
  
}
