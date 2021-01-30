import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Userinfo } from '../my-modal/user.modal';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
url = "https://my-products-ac848-default-rtdb.firebaseio.com/user.json";

  constructor(private _http:HttpClient) { }
  addUserData(user: Userinfo){
   return this._http.post<Userinfo>(this.url, user);
  }
}
