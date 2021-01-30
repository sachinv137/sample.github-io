import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { TopuserComponent } from './topuser.component';
import { ManageUserComponent } from './manage-user/manage-user.component';
import { UserServiceService } from '../myservice/user-service.service';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';


const routesuser: Routes = [
  { path: 'users/top-users', component: TopuserComponent },
  { path: 'users/add-user', component: ManageUserComponent },
  { path: 'users/contact-form', component: ReactiveFormComponent }
];

@NgModule({
  declarations: [
    TopuserComponent,
    CardComponent,
    ManageUserComponent,
    ReactiveFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routesuser)
  ],
  providers: [UserServiceService]
})
export class UserModalModule {
  constructor(){
    console.log("User Module loaded");
  } 
  
}
