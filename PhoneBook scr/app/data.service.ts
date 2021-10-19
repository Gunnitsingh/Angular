import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
 contact:{name:string,phone:string,email:string}[]=[
   {name:'Guneet',phone:'9874563210',email:'guneetsingh@mail.com'},
 {name:'sunny',phone:'8547123656',email:'sunnyklf@yahoo.com'}
];
obj:any=[];
  constructor() { }

  onAdded(name:string,phone:string,email:string){
    this.contact.push({name,phone,email});
  }
  onDelete(name:string){
    this.contact = this.contact.filter(i => i.name!== name);
  }
  onSearch(name:string){
     var conts= this.contact.find(e => e.name === name);
     this.obj.push(conts);

  }
  onPop(){
    delete this.obj[0];
  }
}
