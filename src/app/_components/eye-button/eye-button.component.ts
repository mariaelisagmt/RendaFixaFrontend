import { Component } from '@angular/core';

@Component({
  selector: 'app-eye-button-disponivel',
  templateUrl: './eye-button.component.html',
})
export class EyeButtonComponent {
  mostrarSaldo: boolean = false;

  alternarVisibilidade() {
    this.mostrarSaldo = !this.mostrarSaldo;
  }
}
