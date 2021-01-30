import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice/myservice.service';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  abcd:string;
  constructor(private de: MyserviceService) { }
  
  ngOnInit() {
    this.abcd=this.de.abc;
  }
  subs() {
    this.de._subs();
  }
  
}
