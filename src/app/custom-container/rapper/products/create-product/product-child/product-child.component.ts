import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-child',
  templateUrl: './product-child.component.html',
  styleUrls: ['./product-child.component.css']
})
export class ProductChildComponent implements OnInit {
  constructor() { }
count:number=0;
@Input() boxClass:any;
@Input() placeHolderName:string;
@Input() addBtn;
@Output() item=new EventEmitter<string>();

  ngOnInit() {
  }
  addItem(inputVal){
    if (inputVal.value.length>0){
      this.count = this.count + 1;
      this.item.emit(inputVal.value);
      inputVal.value='';
    }
    
    
  }
}
