import { Component, OnInit } from '@angular/core';
import { Products } from '../../my-modal/products';

@Component({
  selector: 'app-buy-product2',
  templateUrl: './buy-product2.component.html',
  styleUrls: ['./buy-product2.component.css']
})
export class BuyProduct2Component implements OnInit {

  constructor(private _products:Products) { }
productsItem=[];
  ngOnInit() {
    this.productsItem=this._products.productItems;
  }

}
