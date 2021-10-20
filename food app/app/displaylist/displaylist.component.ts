import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-displaylist',
  templateUrl: './displaylist.component.html',
  styleUrls: ['./displaylist.component.css']
})
export class DisplaylistComponent implements OnInit {
restList:{id:any,rest_name:string,rest_address:string,rest_number:string}[]=[];
  constructor(private http:HttpClient, private httpService:HttpService) { }

  ngOnInit():void {
    this.httpService.onGet().subscribe(data =>{
      this.restList = data
      console.log(this.restList)
    });
   
   
  }
 

}
