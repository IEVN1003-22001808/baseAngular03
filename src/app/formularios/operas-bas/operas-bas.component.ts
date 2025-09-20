import { Component } from '@angular/core';

@Component({
  selector: 'app-operas-bas',
  standalone: false,
  templateUrl: './operas-bas.component.html',
  styleUrl: './operas-bas.component.css'
})
export class OperasBasComponent {
  num1:string='';
  num2:string='';
  resultado:number=0;
  op: string = '';

  calcular(){
    const n1 = parseInt(this.num1);
    const n2 = parseInt(this.num2);

    switch (this.op){
      case 'sumar':
        this.resultado = n1 + n2;
      break;
      case 'restar':
        this.resultado = n1 - n2;
      break;
      case "mult":
        this.resultado = n1 * n2;
      break;
      case 'div':
        this.resultado = n1 / n2;
      break;
    }
  }

}
