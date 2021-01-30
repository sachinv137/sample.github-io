import { Component, OnInit } from '@angular/core';
import { HeaderServiceService } from '../myservice/header-service.service';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent implements OnInit {
welcome; //for user block
back; //for login block
contact; //for contact block
  constructor(private _header:HeaderServiceService) { 
    this._header.contact.subscribe(res=>{
      this.contact=res;
    });
    this._header.back.subscribe(res => {
      this.back = res;
    });
    this._header.welcome.subscribe(res => {
      this.welcome = res;
    })
  }
logout(){
  this._header.welcome.next('');
}
  ngOnInit() {
  }
  

}
