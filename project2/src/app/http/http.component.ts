import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {
  user:{name:string,addredd:string};
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  //   this.http.get(" http://localhost:3000/customer_details: "  ).subscribe(data=>{
       
  //     console.log(data)
  //   })
  // }
// onGet(){
  
}
}
