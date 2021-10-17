import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Params } from '@angular/router';


@Component({
  selector: 'app-admineditform',
  templateUrl: './admineditform.component.html',
  styleUrls: ['./admineditform.component.css']
})
export class AdmineditformComponent implements OnInit {
user:{id:string};
  formData:any=[];
  adminform:any=FormGroup;


  constructor( private ad:FormBuilder, private route:ActivatedRoute,private http:HttpClient) { }

  ngOnInit(): void {
       this.adminform=this.ad.group({
        policyexclusion:['',Validators.required],
        policycoverage:['',Validators.required],
        startdate:[''],
        enddate:['']

       });
       this.http.get<{
        cust_id : string,
        cust_name : string,
        cust_address : string,
        cust_number : string,
        my_policies : string,
        
          }[]>("http://localhost:3000/user").subscribe(post=>{
        this.formData = post;
        console.log(this.formData)});
       this.user={
      id :   this.route.snapshot.paramMap["id"],
        
       }
       this.route.params.subscribe((param:Params)=>{
        this.user.id=param["id"]
       
       });
       console.log(this.user.id);
      
       
  }

  onSubmit(form:FormGroup){
    console.log('PolicyExclusion',form.value.policyexclusion);
    console.log('PolicyCoverage',form.value.policycoverage);
    console.log('StartDate',form.value.startdate);
    console.log('EndDate',form.value.enddate);
  }
//   onSearch(cust_id:any){
//    let userdata = this.arr.find(i=>i.cust_id==cust_id);
}
