import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './custom-container/rapper/contact/contact.component';
import { AboutComponent } from './custom-container/rapper/about/about.component';
import { HomeComponentComponent } from './custom-container/rapper/home-component/home-component.component';
import { PageNotFoundComponent } from './custom-container/rapper/page-not-found/page-not-found.component';
import { SigninComponent } from './custom-container/rapper/signin/signin.component';
import { CustomPreloadingServiceService } from './custom-container/rapper/myservice/custom-preloading-service.service';


const routes: Routes = [
  { path: '', redirectTo: 'signin', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'home', component: HomeComponentComponent },
  {
    path: '', data: { preload: true }, loadChildren: () => import('./custom-container/rapper/products/product-modal.module').then(m => m.ProductModalModule)},
  { path: 'recipes', loadChildren: () => import('./custom-container/rapper/services/service-modal.module').then(m => m.ServiceModalModule)},
  { path: '', data: { preload: true }, loadChildren: () => import('./custom-container/rapper/users/user-modal.module').then(m => m.UserModalModule) },
  { path: 'contact',  component: ContactComponent },
  { path: 'signin', component: SigninComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    preloadingStrategy:CustomPreloadingServiceService
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
