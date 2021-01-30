import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderServiceService } from '../myservice/header-service.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private _header:HeaderServiceService, private router:Router) { }

  ngOnInit() {
  }
  sign(uname, pswd){
    if(pswd.value=='sachin@123') {
      this._header.welcome.next(uname.value);
      this.router.navigate(['home']);
    }
    else{
      alert("Please fill correct details");
    }
  }
}
