import { Component } from '@angular/core';

@Component({
  selector: 'app-cinepolis',
  standalone: false,
  templateUrl: './cinepolis.component.html',
  styleUrl: './cinepolis.component.css'
})
export class CinepolisComponent {

  nombre:string='';
  cantCom:number=0;
  cantBol:number=0;

  tarjetaCine:boolean=false;
  valorPagar:number=0;

  validarBoletos(): boolean {
    if (this.cantBol > this.cantCom * 7) {
      alert('¡La cantidad de boletos no puede exceder de 7 por comprador!');
      return false;
    }
    return true;
  }

  calcular(): void {
    if (!this.validarBoletos()) {
      return; // Si la validación falla, detiene la ejecución del método
    }

    const PRECIO_BOLETO = 12;
    let subtotal = this.cantBol * PRECIO_BOLETO;
    let descuentoBol = 0;
    
    
    if (this.cantBol > 5) {
      descuentoBol = subtotal * 0.15; // 15% de descuento
    } else if (this.cantBol >= 3 && this.cantBol <= 5) {
      descuentoBol = subtotal * 0.10; // 10% de descuento
    } else if (this.cantBol <= 2){
      descuentoBol = subtotal * 0; // 0% de descuento
    }
    
    let totalDescuento = subtotal - descuentoBol;
    let descuentoCine = 0;

  
    if (this.tarjetaCine) {
      descuentoCine = totalDescuento * 0.10; // 10% de descuento adicional
    }

    this.valorPagar = totalDescuento - descuentoCine;
  }
}
