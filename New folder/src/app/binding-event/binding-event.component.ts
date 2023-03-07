import { Component } from '@angular/core';

@Component({
  selector: 'app-binding-event',
  templateUrl: './binding-event.component.html',
  styleUrls: ['./binding-event.component.css']
})
export class BindingEventComponent {
  onClick(event:any){
    alert(event.pointerId)
  }
  onSubmit(value:string){
    alert(value)
  }
  numberA: number;
  numberB: number;
  result: number=0;
  constructor(){
    this.numberA=0,
    this.numberB=0
    // this.result=0
  }
  addNumbers() {
    this.result = this.numberA + this.numberB;
  }
  minus(){
    this.result = this.numberA - this.numberB;
  }
  multiplication(){
    this.result = this.numberA * this.numberB;
  }
  division(){
    this.result = this.numberA / this.numberB;
  }
  reset(){
    this.numberA=0
    this.numberB=0
    this.result=0
  }
}
