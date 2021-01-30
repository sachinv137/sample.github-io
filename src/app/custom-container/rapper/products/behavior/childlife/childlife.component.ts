import { Component, OnInit, SimpleChanges, OnChanges, Input, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-childlife',
  templateUrl: './childlife.component.html',
  styleUrls: ['./childlife.component.css']
})
export class ChildlifeComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input() childdatauser:string='Jagdeesh';
 
  constructor() {
    console.log('Constuctor called');
   }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges called');
  }

  ngOnInit() {
    console.log('ngOnInit called');
  }

  ngDoCheck(): void {
    console.log('ngDoCheck called');
  }

 ngAfterContentInit(){
   console.log('ngAfterContentInit called');
 }

  ngAfterContentChecked(){
    console.log('ngAfterContentChecked called');
  }

  ngAfterViewInit(){
    console.log('ngAfterViewInit called');
  }

  ngAfterViewChecked(){
    console.log('ngAfterViewChecked called');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy called');
  }

}
