import { Component } from '@angular/core';

@Component({
  selector: 'app-quadratic-equation',
  templateUrl: './quadratic-equation.component.html',
  styleUrls: ['./quadratic-equation.component.css']
})
export class QuadraticEquationComponent {
  public numberA:number=0;
  public numberB:number=0;
  public numberC:number=0;

  public resul:string='';
  public x1:number=0;
  public x2:number=0;
  public delta:number=0;

  findSolution(){
    let a=this.numberA;
    let b=this.numberB;
    let c=this.numberC;
    if( a==0){
        alert('đây không phải phương tình bậc 2')
    }
    else{
        let detal=(b**2)-(4*a*c)
        let x1=(-b/(2*a));
        if(detal<0){
            this.resul='phương trình vô nghiệm'
        }
        else{
            if(detal==0){
                let resul="Nghiệm kép x1=x2: "+x1
                this.resul=resul
            }
            else{
                let x1= ((-b+Math.sqrt(detal)/(2*a)))
                let x2= ((-b-Math.sqrt(detal)/(2*a)))
                let X1 = Math.round((x1 + Number.EPSILON) * 1000) / 1000;
                let X2 = Math.round((x2 + Number.EPSILON) * 1000) / 1000;
                let resul=" X1:"+X1+"    X2:"+X2
                this.resul=resul

            }
        }
    }
  }
  reset(){
    this.numberA=0;
    this.numberB=0;
    this.numberC=0;
    this.resul=''
  }
  onFocus(event: any) {
    if (event.target.value === '0') {
      event.target.value = '';
    }
  }
}
