import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  addProduct:string='Product Name';
  addUser:string='User Name';
  customBtn1='Add Product';
  customBtn2 = 'Add User';
  primary={
    'bg-light':true,
    'border-primary':true
  }
  secondary={
    'bg-white': true,
    'border-secondary': true
  }
  products=[];
  users=[];
  data(pro){
this.products.push(pro);
  }
  
  dataUser(userr){
    this.users.push(userr);
  }
  remove(item){
    this.products.splice(item,1);
  }
  removeUser(item){
    this.users.splice(item,1);
  }
  constructor() { }

  ngOnInit() {
  }

}
