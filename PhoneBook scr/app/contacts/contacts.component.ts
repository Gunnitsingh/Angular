import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
@Input()contact:{name:string,phone:string,email:string}[]=[];
  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.contact = this.dataService.contact;
  }

}
