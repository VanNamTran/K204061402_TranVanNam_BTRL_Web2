import { Component } from '@angular/core';

@Component({
  selector: 'app-binding-property-component',
  template: `<div>Name: {{name}}</div>
             <div >Email: {{email}} </div>
             <input type="text" [value]="name" [id]="nameid" [disabled]="isDisabled">
             <input type="text" [value]="email" [id]="emailid" [disabled]="isDisabled">`,
  styleUrls: ['./binding-property-componen.component.css']
})
// @Component({
//   selector: 'app-binding-property-component',
//   templateUrl: './binding-property-componen.component.html',
//   styleUrls: ['./binding-property-componen.component.css']
// })
export class BindingPropertyComponenComponent {
  public name:string="Trần Văn Nam"
  public email:string="namtv20406@gmail.com"
  public nameid:string="nameid"
  public emailid:string="emailid"
  public isDisabled:boolean=true
}
