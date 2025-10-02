  import { Component } from '@angular/core';
  import { CalculadoraResistencias } from './calculos.service';

  @Component({
    selector: 'app-resistencias',
    standalone: false,
    templateUrl: './resistencias.component.html',
    styleUrl: './resistencias.component.css'
  })

  export class ResistenciasComponent {

    banda1Select: number | null = null;
    banda2Select: number | null = null;
    multiSelect: number | null = null;
    toleSelect: number | null = null;
    valor: number | null = null;
    valorMax: number | null = null;
    valorMin: number | null = null;

    banda1C: number | null = null;
    banda2C: number | null = null;
    multiC: number | null = null;
    toleC: number | null = null;
    
    colores = [
      { nombre: 'black', valor: 0 },
      { nombre: 'brown', valor: 1 },
      { nombre: 'red', valor: 2 },
      { nombre: 'orange', valor: 3 },
      { nombre: 'yellow', valor: 4 },
      { nombre: 'green', valor: 5 },
      { nombre: 'blue', valor: 6 },
      { nombre: 'purple', valor: 7 },
      { nombre: 'gray', valor: 8 },
      { nombre: 'white', valor: 9 }
    ];
    coloresMulti = [
      { nombre: 'black', valor: 0, multi: 1 },
      { nombre: 'brown', valor: 1, multi: 10 },
      { nombre: 'red', valor: 2, multi: 100 },
      { nombre: 'orange', valor: 3, multi: 1000 },
      { nombre: 'yellow', valor: 4, multi: 10000 },
      { nombre: 'green', valor: 5, multi: 100000 },
      { nombre: 'blue', valor: 6, multi: 1000000 },
      { nombre: 'purple', valor: 7, multi: 10000000 },
      { nombre: 'gray', valor: 8, multi: 100000000 },
      { nombre: 'white', valor: 9, multi: 1000000000 }
    ];
    coloresTole = [
      { nombre: 'gold', valor: 0.05, tole: 'Dorado 5%' },
      { nombre: 'silver', valor: 0.10, tole: 'Plata 10%' }
    ]  

    constructor() { }

    calcular(): void {
      if (this.banda1Select !== null && this.banda2Select !== null && this.multiSelect !== null && this.toleSelect !== null) {

        const resultados = CalculadoraResistencias.calcularResistencia(
        this.banda1Select,
        this.banda2Select,
        this.multiSelect,
        this.toleSelect
        );

        this.valor = resultados.valor;
        this.valorMax = resultados.valorMax;
        this.valorMin = resultados.valorMin;

        this.banda1C = this.banda1Select;
        this.banda2C = this.banda2Select;
        this.multiC = this.multiSelect;
        this.toleC = this.toleSelect;

      } else {
        alert('Por favor, ingresa un valor para cada campo.');
      }
    }

    getCV(valor: number | null, obtenerNombre: boolean = false): string | null {
      if (valor === null) return null;
      const color = this.colores.find(c => c.valor === valor);
      return color ? (obtenerNombre ? color.nombre : color.nombre.toLowerCase()) : null;
    }

    getCMulti(multiplicador: number | null, obtenerNombre: boolean = false): string | null {
      if (multiplicador === null) return null;
      const color = this.coloresMulti.find(c => c.multi === multiplicador);
      return color ? (obtenerNombre ? color.nombre : color.nombre.toLowerCase()) : null;
    }
    
    getCTole(tolerancias: number | null, obtenerNombre: boolean = false): string | null {
      if (tolerancias === null) return null;
      const tolerancia = this.coloresTole.find(t => t.valor === tolerancias);
      return tolerancia ? (obtenerNombre ? tolerancia.tole : tolerancia.nombre.toLowerCase()) : null;
    }

  }
