import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerCareDisplayDetailsService {
  
  constructor(private http : HttpClient) { }
  getdetail(){
    return this.http.get('http://localhost:3000/user:');
  }


}
