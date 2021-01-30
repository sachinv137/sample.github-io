import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HeaderServiceService } from '../myservice/header-service.service';
import { MyserviceService } from '../myservice/myservice.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit,OnDestroy {

  xyz:string;
  constructor(private ab: MyserviceService, private _header:HeaderServiceService) { }
  selectValue="Css";
  val=""; 
  radiovalue="Female";
  gender:any=[
{
  id: '1', value: 'Male'
},
    {
      id: '2', value: 'Female'
    }
  ]
  // @ViewChild('myForm',{static:false}) ngform:NgForm;
  ngOnInit() {
    this.xyz = this.ab.abc;
this._header.contact.next(true);
  }
  ngOnDestroy(){
    this._header.contact.next(false);
  }
  subs(){
   this.ab._subs();
  }
 formData={
   uname:'',
   email:'',
   subject:'',
   gender:''
 }
  submitFunction(f: NgForm){
    this.formData.uname = f.value.userdetals.uname;
    this.formData.email = f.value.userdetals.email;
    this.formData.subject = f.value.subject;
    this.formData.gender = f.value.gender;
    this.abc = true;
    f.reset({
      subject: 'Html',
      gender: 'Male'
    });
  }
  abc = false;
  setUser(my: NgForm) {
   my.form.patchValue({
     userdetals: {
       uname: "Sachin"
     }
   })
  }
  resetval(m:NgForm){
  //m.resetForm();
  m.reset({
    subject:'Html',
    gender:'Male'
  });
    //m.onReset();
  }
}
