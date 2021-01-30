import { Component, OnInit } from '@angular/core';
import { Recipes } from '../my-modal/recipes';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
recipes=[];
  constructor(private _recipes:Recipes) { }

  ngOnInit() {
    this.recipes=this._recipes.recipes;
  }

}
