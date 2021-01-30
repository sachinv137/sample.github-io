import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../../../myservice/myservice.service';

@Component({
  selector: 'app-behavior',
  templateUrl: './behavior.component.html',
  styleUrls: ['./behavior.component.css']
})
export class BehaviorComponent implements OnInit {
  see:boolean=true;
  data:string='Nitin';
  userdataa:string='Sachin Kumar';
  constructor(private _myservice: MyserviceService) {
    this._myservice.userdata.subscribe(res => {
      this.userdataa = res;
    })
  }
  updatedata(dataname){
    this.data=dataname.value;
  }

  dest(){
    this.see=false;
  }

  ngOnInit() {
  }

}
