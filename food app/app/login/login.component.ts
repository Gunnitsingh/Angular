import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
form:FormGroup;
Names:any = ["Guneet", "Neeraj", "neeraj"]
  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      "name": new FormControl(null,[Validators.required, this.loginNames.bind(this)]),
      "password": new FormControl(null,[Validators.required,Validators.minLength(5), this.loginPassword]),
    })
  }
loginNames(control:FormControl):{[s:string]:boolean}{
  if (this.Names.indexOf(control.value) ==-1){
    return {"loginUser" : true}
  }
  return null
}
loginPassword(control:FormControl):{[s:string]:boolean}{
  if(control.value !== "Zigma23"){
    return{"invalidPassword": true}
  }
  return null
}
}
