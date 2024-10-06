import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-eye-button-disponivel',
  templateUrl: './eye-button.component.html',
})

export class EyeButtonComponent {
  @Input() saldo: number | undefined; 
  mostrarSaldo: boolean = false;
  
  getSaldo(): string {
    return this.saldo? "R$ " + this.saldo.toFixed(2).replace('.', ',').replace(/\B(?=(\d{3})+(?!\d))/g, '.') : "R$ 0,00";
  }

  alternarVisibilidade() {
    this.mostrarSaldo = !this.mostrarSaldo;
  }
}