import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BehaviorComponent } from './behavior/behavior/behavior.component';
import { BoxoneComponent } from './behavior/boxone/boxone.component';
import { BoxtwoComponent } from './behavior/boxtwo/boxtwo.component';
import { BoxthreeComponent } from './behavior/boxthree/boxthree.component';
import { BoxfourComponent } from './behavior/boxfour/boxfour.component';
import { ChildlifeComponent } from './behavior/childlife/childlife.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { ProductChildComponent } from './create-product/product-child/product-child.component';
import { Products } from '../my-modal/products';
import { ProductDetailComponent } from './buy-product2/product-detail/product-detail.component';
import { BuyProduct2Component } from './buy-product2/buy-product2.component';
import { ProductsComponent } from './buy-products/products.component';
import { ChildComponent } from './buy-products/child/child.component';
import { RouterModule, Routes } from '@angular/router';
import { ManageProductComponent } from './manage-product/manage-product.component';
import { ProductlistService } from '../myservice/productlist.service';
const proRoutes: Routes = [
  { path: 'products/buy-product', component: ProductsComponent },
  {
    path: 'products/buy-product2', children: [
      { path: '', component: BuyProduct2Component },
      { path: ':id', component: ProductDetailComponent }
    ]
  },
  { path: 'products/create-product', component: CreateProductComponent },
  { path: 'products/behavior', component: BehaviorComponent },
  { path: 'products/manage-product', component: ManageProductComponent }
];

@NgModule({
  declarations: [
    BehaviorComponent,
    BoxoneComponent,
    BoxtwoComponent,
    BoxthreeComponent,
    BoxfourComponent,
    ChildlifeComponent,
    CreateProductComponent,
    ProductChildComponent,
    ProductsComponent,
    ChildComponent,
    BuyProduct2Component,
    ProductDetailComponent,
    ManageProductComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(proRoutes)
  ],   
  providers: [Products, ProductlistService]
})
export class ProductModalModule { 
  constructor() {
    console.log("product module loaded");
  }
}
