import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  addedproduct: any;
  selproduct: boolean = false;
  gross: string;
  constructor() { 
    }
  selectitem(item){
    this.selproduct = true;
    this.gross = item;
  }
  setpro(event){
this.addedproduct=event;
  }

  ngOnInit() {
  }

}
