import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

import { Router } from '@angular/router';

@Component({
  selector: 'app-enter-customer-id',
  templateUrl: './enter-customer-id.component.html',
  styleUrls: ['./enter-customer-id.component.css']
})
export class EnterCustomerIdComponent implements OnInit {

  claimform:FormGroup;
  arr=[];

  custumor:any ;

  constructor(private fb:FormBuilder, private route : Router) { }

  ngOnInit(): void {
    
    this.claimform=new FormGroup({
      id:new FormControl('')
    });
  }
  onSubmit(form:FormGroup){

    localStorage.setItem('id',form.value.id);
    this.ngOnInit();
    this.route.navigateByUrl('detail');

}
}
