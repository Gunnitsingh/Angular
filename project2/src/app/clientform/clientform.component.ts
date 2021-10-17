import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpService } from '../http.service';


@Component({
  selector: 'app-clientform',
  templateUrl: './clientform.component.html',
  styleUrls: ['./clientform.component.css']
})
export class ClientformComponent implements OnInit {
policy : any =["Family Health floater","Individual Plan", "Old Age Plan" , "Children`s Plan"];
pol;
istrue = false;
userdata :{
  cust_id : string,
  cust_name : string,
  cust_address : string,
  cust_number : string,
  my_policies : string,
  
    }={
      cust_id : "",
      cust_name : "",
      cust_address : "",
      cust_number : "",
      my_policies : "",
      
        }
  constructor(private http:HttpClient,private httpService:HttpService) { }
form:FormGroup;
arr:{
  cust_id : string,
  cust_name : string,
  cust_address : string,
  cust_number : string,
  my_policies : string,
  
    }[]=[];
  // user = {
  // cust_id :21 ,
  // cust_name :"Guneet" ,
  // cust_address :"Delhi" ,
  // cust_number :"9887666" ,
  // my_policies :"Health" ,
  
  //   }
  ngOnInit(): void {
    this.form = new FormGroup({
      "cust_id" : new FormControl(null,[Validators.required]),
        "cust_name" : new FormControl(null,[Validators.required]),
        "cust_address" : new FormControl(null,[Validators.required]),
        "cust_number" : new FormControl(null,[Validators.required]),
        "my_policies" : new FormControl(this.policy,[Validators.required]),
        
    });
    this.http.get<{
      cust_id : string,
      cust_name : string,
      cust_address : string,
      cust_number : string,
      my_policies : string,
      
        }[]>("http://localhost:3000/user").subscribe(post=>{
      this.arr = post;
      console.log(this.arr)
    });
    this.httpService.onGet()
   this.arr=this.httpService.arr;
   console.log(this.arr)
  }
onSubmit(){
  const  user = {
    cust_id : this.form.value.cust_id,
    cust_name : this.form.value.cust_name,
    cust_address : this.form.value.cust_address,
    cust_number : this.form.value.cust_number,
    my_policies : this.form.value.my_policies,
    
      }
      this.httpService.onSubmit(user)
      this.form.reset();
//   this.http.post("http://localhost:3000/user", user ).subscribe(data=>{
//   console.log(data)
// })
//   this.arr.push(this.form.value);
//   console.log(this.form.value);
 
  
  
//   console.log(this.arr)
  
 
}
onGet(){
  this.http.get<{
    cust_id : string,
    cust_name : string,
    cust_address : string,
    cust_number : string,
    my_policies : string,
    
      }[]>("http://localhost:3000/user").subscribe(post=>{
    this.arr = post;
    console.log(this.arr)
  })
}
onSearch(cust_id:any){
  this.userdata = this.arr.find(i=>i.cust_id==cust_id);
  console.log(this.userdata);
  console.log(this.arr);
  this.istrue =true;
}
onDelete(cust_id){
this.httpService.onDelete(cust_id)
this.form.reset();
this.http.get<{
  cust_id : string,
  cust_name : string,
  cust_address : string,
  cust_number : string,
  my_policies : string,
  
    }[]>("http://localhost:3000/user").subscribe(post=>{
  this.arr = post;
  console.log(this.arr)
});
}
}
