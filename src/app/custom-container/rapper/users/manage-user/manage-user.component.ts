import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Userinfo } from '../../my-modal/user.modal';
import { UserServiceService } from '../../myservice/user-service.service';

@Component({
  selector: 'app-manage-user',
  templateUrl: './manage-user.component.html',
  styleUrls: ['./manage-user.component.css']
})
export class ManageUserComponent implements OnInit {
  @ViewChild('userForm', {static:true}) userForm:NgForm;
  userItems;
  constructor(private userDataService: UserServiceService) {
    this.userItems=[]
   }

  ngOnInit() {
  }
  userAdd(userdata: Userinfo){
    this.userItems.push({
      username:userdata.username,
      technology:userdata.technology
    });
    this.userDataService.addUserData(this.userItems).subscribe((res)=>res)
  }

  editUser(i){

  }

  removeUser(i){

  }
}
