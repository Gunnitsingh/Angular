import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
  }
onAddContact(name:string,phone:string,email:string){
 this.dataService.onAdded(name,phone,email);
 this.dataService.onPop()
}
onDeleteContact(name:string){
  this.dataService.onDelete(name);
  this.dataService.onPop()
}
onSearchContact(name:string){
  this.dataService.onSearch(name);
  
}
}
