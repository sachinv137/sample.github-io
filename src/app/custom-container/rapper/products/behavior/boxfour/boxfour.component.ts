import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../../../myservice/myservice.service';

@Component({
  selector: 'app-boxfour',
  templateUrl: './boxfour.component.html',
  styleUrls: ['./boxfour.component.css']
})
export class BoxfourComponent implements OnInit {
  userdata:string;
  constructor(private _myservice: MyserviceService) {
    this._myservice.userdata.subscribe(res => {
      this.userdata = res;
    })
  }

  ngOnInit() {
  }
  update(uname1) {
    // this.userdata=uname.value;
    this._myservice.userdata.next(uname1.value);
  }
}
