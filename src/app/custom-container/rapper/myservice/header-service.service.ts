import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderServiceService {

  constructor() { }
  contact=new BehaviorSubject(false);
  back = new BehaviorSubject({text:'',url:''});
  welcome = new BehaviorSubject('');
}
