import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../../../myservice/myservice.service';

@Component({
  selector: 'app-boxthree',
  templateUrl: './boxthree.component.html',
  styleUrls: ['./boxthree.component.css']
})
export class BoxthreeComponent implements OnInit {
  userdata:string;
  constructor(private _myservice: MyserviceService) {
    this._myservice.userdata.subscribe(res => {
      this.userdata = res;
    })
  }

  ngOnInit() {
  }
  update(uname) {
    // this.userdata=uname.value;
    this._myservice.userdata.next(uname.value);
  }

}
