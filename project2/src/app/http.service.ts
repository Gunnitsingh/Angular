import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService implements OnInit{
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
  constructor(private http:HttpClient) { }
  arr:{
    cust_id : string,
    cust_name : string,
    cust_address : string,
    cust_number : string,
    my_policies : string,
    
      }[]=[];
      ngOnInit(){
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
      onSubmit(user){
        // const  user = {
        //   cust_id : this.form.value.cust_id,
        //   cust_name : this.form.value.cust_name,
        //   cust_address : this.form.value.cust_address,
        //   cust_number : this.form.value.cust_number,
        //   my_policies : this.form.value.my_policies,
          
        //     }
        this.http.post<{
          cust_id : string,
          cust_name : string,
          cust_address : string,
          cust_number : string,
          my_policies : string,
          
            }[]>("http://localhost:3000/user", user ).subscribe(data=>{
        console.log(this.arr);
        this.arr = data
      })
        // this.arr.push(this.form.value);
        // console.log(this.form.value);
       
        
        
        console.log(this.arr)
        
       
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
      // onSearch(cust_id:any){
      //    this.arr.find(i=>i.cust_id==cust_id);
      //   console.log(this.userdata);
      //   // this.istrue =true;
      // }
      onDelete(cust_id){
      this.http.delete("http://localhost:3000/user/" + `${cust_id}`).subscribe(del=>{
        console.log(del);
        console.log(cust_id);
      })
      }
      onPatch(user:{
        cust_id : string,
        cust_name : string,
        cust_address : string,
        cust_number : string,
        my_policies : string,
        
      }){
         this.http.patch("http://localhost:3000/user/" + `${user.cust_id}`,{user}).subscribe(patch=>{
           console.log(patch)
         })
      }
}
