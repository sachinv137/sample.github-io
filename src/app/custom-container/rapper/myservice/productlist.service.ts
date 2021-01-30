import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductlistService {

  constructor(private _http:HttpClient) { 
    
  }
  url = "https://my-products-ac848-default-rtdb.firebaseio.com/pro.json"
  addProduct(pro:any[]){
   return this._http.put(this.url,pro)
  }
  fetchData(){
    return this._http.get(this.url)
  }
}

