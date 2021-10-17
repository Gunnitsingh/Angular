import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-claimfrom',
  templateUrl: './claimfrom.component.html',
  styleUrls: ['./claimfrom.component.css']
})
export class ClaimfromComponent implements OnInit {

  constructor() { }

  form:FormGroup;
  ngOnInit(): void {
    this.form = new FormGroup({
        "id" : new FormControl(null,[Validators.required]),
        "claim" : new FormControl(null,[Validators.required]),
        "type" : new FormControl(null,[Validators.required]),
        "place": new FormControl(null,[Validators.required])
        // "Policy" : new FormControl(["Family Health floater","Individual Plan", "Old Age Plan" , "Children`s Plan"],[Validators.required]),
        // "email" : new FormControl(null,[Validators.required]),
    })
  }
onSubmit(){
  console.log(this.form.value)
}

}
