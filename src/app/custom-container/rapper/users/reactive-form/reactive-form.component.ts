import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  myReactiveForm:FormGroup;
  formClass;
  nameNotAllow=['Sachin','Pratibha'];

  gender: any = [
    {
      id: '1', value: 'Male'
    },
    {
      id: '2', value: 'Female'
    }
  ]

  constructor() { }

  ngOnInit() {
    this.myReactiveForm=new FormGroup({
      "userlist": new FormGroup({
        "uname": new FormControl(null, [Validators.required, this.nameNA.bind(this)]),
        "email": new FormControl(null, [Validators.required, Validators.email], this.naEmail)
      }),
      "subject": new FormControl('Html'),
      "skills": new FormArray([
        new FormControl(null, Validators.required)
      ]),
      "gender":new FormControl('Male')
    });

    // this.myReactiveForm.valueChanges.subscribe(
    //   (value) => console.log(value)
    // );

    this.myReactiveForm.statusChanges.subscribe(
      (status) => {
        console.log(status);
        this.formClass = status;
      }
    );

    setTimeout(() => {
      this.myReactiveForm.setValue({
        "userlist": {
          "uname": 'Anup',
          "email": 'f@gmail.com'
        },
        "subject": 'Css',
        "skills": [
          'Photoshop'
        ],
        "gender": 'Male'
      });
    }, 4000);

  }

  onSubmit(){
    console.log(this.myReactiveForm);
    // console.log(this.myReactiveForm.value.skills[1]);
  }

  addmore(){
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.myReactiveForm.get("skills")).push(control);
  }

  nameNA(control:FormControl){
    if(this.nameNotAllow.indexOf(control.value)!==-1){
return {'namenotallow':true}
    }
    return null;
  }

  naEmail(control:FormControl): Promise<any> | Observable<any>{
const myPromise =new Promise<any>((resolve, reject)=>{
setTimeout(() => {
  if(control.value==='sachin@gmail.com') {
    resolve({'emailnotallow':true});
  }
  else{
    resolve(null);
  }
}, 3500);
})
return myPromise;
  }

}


