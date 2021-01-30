import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  abc:string="kumar";
  UserValues = [{
    name: 'Mohan', username: 'pratap123'
  },
  {
    name: 'Sachin', username: 'kartn123'
  }, {
    name: 'Javed', username: 'jader87'
  }, {
    name: 'Shyam', username: 'kjyt56'
  },]
  constructor(private _http:HttpClient) { }
  _subs() {
    alert("Thanks for Subscribing us.");
  }
  url ='https://jsonplaceholder.typicode.com/users'
  getData():Observable<any>{
    return this._http.get(this.url);
  }
  // userdata=new Subject<string>();
  userdata = new BehaviorSubject<string>('Pintu');
}
