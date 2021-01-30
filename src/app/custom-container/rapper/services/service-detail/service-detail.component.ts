import { Component, OnDestroy, OnInit } from '@angular/core';
import { HeaderServiceService } from '../../myservice/header-service.service';
import { Recipes } from '../../my-modal/recipes';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-service-detail',
  templateUrl: './service-detail.component.html',
  styleUrls: ['./service-detail.component.css']
})
export class ServiceDetailComponent implements OnInit, OnDestroy {

  constructor(private _header: HeaderServiceService,private _recipes: Recipes, private _activatedRoute:ActivatedRoute) { }
recipesItem=[];
selectedItem;
id;
  ngOnInit() {
    this._header.back.next({ text: 'Back to Recipes', url: '/recipes' })
    this._activatedRoute.params.subscribe((params:Params)=>{
      this.id=params['id'];
      this.recipesItem = this._recipes.recipes;
      this.selectedItem = this.recipesItem[this.id - 1];
    })
  }
  ngOnDestroy() {
    this._header.back.next({ text: '', url: '' });
  }

}
