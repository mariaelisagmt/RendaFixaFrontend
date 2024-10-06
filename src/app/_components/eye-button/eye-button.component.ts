import { Component, Input } from '@angular/core';
import { RendaFixaService } from '../../services/rendafixa.service';
import { GetContaByIdResponse } from '../../models/conta.model';

@Component({
  selector: 'app-eye-button-disponivel',
  templateUrl: './eye-button.component.html',
})
export class EyeButtonComponent {
  @Input() saldo: number | undefined; 
  mostrarSaldo: boolean = false;

  alternarVisibilidade() {
    this.mostrarSaldo = !this.mostrarSaldo;
  }
  
  getSaldo(): string {
    return this.saldo? "R$ "+this.saldo.toFixed(2).replace('.', ',').replace(/\B(?=(\d{3})+(?!\d))/g, '.') : "R$ 0,00";
  }
}