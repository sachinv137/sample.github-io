import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice/myservice.service';

@Component({
  selector: 'app-topuser',
  templateUrl: './topuser.component.html',
  styleUrls: ['./topuser.component.css']
})
export class TopuserComponent implements OnInit {
  UserList=[];
  constructor(private userdata: MyserviceService) { }

  ngOnInit() {
    // this.UserList = this.userdata.UserValues;
    this.userdata.getData().subscribe(pro => this.UserList=pro);
  }

}
