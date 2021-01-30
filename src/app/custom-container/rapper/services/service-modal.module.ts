import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceDetailComponent } from './service-detail/service-detail.component';
import { ServicesComponent } from './services.component';
import { Recipes } from '../my-modal/recipes';
import { RouterModule, Routes } from '@angular/router';

const serviceRoute:Routes=[
  { path: '', component: ServicesComponent},
  { path: ':id', component: ServiceDetailComponent } 
];

@NgModule({
  declarations: [
    ServiceDetailComponent,
    ServicesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(serviceRoute)
  ],
  providers: [Recipes]
})
export class ServiceModalModule { 
  constructor() {
    console.log("Service module loaded");
  }
}
