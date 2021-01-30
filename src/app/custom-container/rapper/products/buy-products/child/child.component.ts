import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  constructor() { }
  @Output() addedproduct = new EventEmitter<any>();
  @Input() selectedproduct: boolean = false;
  @Input() grosary: string;
  ngOnInit() {
  }
  additem(){
    this.addedproduct.emit(this.grosary);
  }

}
