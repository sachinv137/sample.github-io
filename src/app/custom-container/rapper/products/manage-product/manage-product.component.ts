import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ProductlistService } from '../../myservice/productlist.service';

@Component({
  selector: 'app-manage-product',
  templateUrl: './manage-product.component.html',
  styleUrls: ['./manage-product.component.css']
})
export class ManageProductComponent implements OnInit {
  productsItem:any[];
  fatch;
  @ViewChild('id', {static:false}) id: ElementRef;
  @ViewChild('name', { static: false }) name: ElementRef;
  @ViewChild('price', { static: false }) price: ElementRef;
  editMode:boolean=false;
  editIndex:number;
  constructor(private mypro:ProductlistService) { }
  
  ngOnInit() {
    this.fatchProduct();
  }
  addProduct(id, name, price){
    if (id.value==="" || name.value==="" || price.value===""){
      alert('Please fill the value first.');
    }
    else{
      //Add product in table
      if(this.editMode){
this.productsItem[this.editIndex]={
  id: id.value,
  name: name.value,
  price: price.value
}
this.editMode=false;
this.saveProduct();
        this.id.nativeElement.value = '';
        this.name.nativeElement.value = '';
        this.price.nativeElement.value = '';
      }
      else{
        this.productsItem.push({
          id: id.value,
          name: name.value,
          price: price.value
        })
      }
      //save product in database
      this.saveProduct()
    }
  }
  
  //method for edit product
  editProdudct(i){
    this.editMode=true;
    this.editIndex=i;
    this.id.nativeElement.value = this.productsItem[i].id;
    this.name.nativeElement.value = this.productsItem[i].name;
    this.price.nativeElement.value = this.productsItem[i].price;
  }
  //method for remove product in table
  removeProdudct(i){
    if(confirm("Are you sure remove this product?")){
      this.productsItem.splice(i, 1);
    }
    //save product in database
    this.saveProduct()
  }
  //method for save product in database
  saveProduct(){
    this.mypro.addProduct(this.productsItem).subscribe(
      (Response)=>console.log(Response),
      (err)=>console.log(err)
    )
  }

  //method for fatch product in database
  fatchProduct(){
    this.fatch = true;
    this.mypro.fetchData().subscribe(
      (Response)=>{
        // console.log(Response),
        const prodatafetch=JSON.stringify(Response);
        this.productsItem=JSON.parse(prodatafetch);
      },
      (err)=>console.log(err)
    )
    setTimeout(() => {
      this.fatch = false;
    }, 2000);
  }
}
