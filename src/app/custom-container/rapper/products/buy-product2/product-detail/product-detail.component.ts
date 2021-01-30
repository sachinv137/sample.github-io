import { Identifiers } from '@angular/compiler';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Products } from '../../../my-modal/products';
import { HeaderServiceService } from '../../../myservice/header-service.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit, OnDestroy {

  constructor(private _header: HeaderServiceService, private _products:Products,private _activatedRoute:ActivatedRoute) { }
productItems:any=[];
id;
  ngOnInit() {
    this._header.back.next({ text: 'Back to Products', url: 'products/buy-product2' });
this._activatedRoute.params.subscribe((params:Params)=>{
  this.id=params['id'];
  this.productItems = this._products.productItems[this.id - 1];
})
  }
  ngOnDestroy() {
    this._header.back.next({ text: '', url: '' });
  }

}
