import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../../../myservice/myservice.service';

@Component({
  selector: 'app-boxtwo',
  templateUrl: './boxtwo.component.html',
  styleUrls: ['./boxtwo.component.css']
})
export class BoxtwoComponent implements OnInit {
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
