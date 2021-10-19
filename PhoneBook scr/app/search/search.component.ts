import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, OnDestroy {
@Input() obj:{name:string,phone:string,email:string}[]=[];
  constructor(private dataService : DataService) { }

  ngOnInit(): void {
    this.obj=this.dataService.obj;
  }
ngOnDestroy(){
  this.obj.pop();
}
}
