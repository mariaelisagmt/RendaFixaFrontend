// quantity-input.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-quantity-input',
  templateUrl: './quantity-input.component.html',
  styleUrls: ['./quantity-input.component.css']
})
export class QuantityInputComponent {
  quantity: number = 1;

  // Função para aumentar o valor
  increaseValue(): void {
    this.quantity++;
  }

  // Função para diminuir o valor
  decreaseValue(): void {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }
}
