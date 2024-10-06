import { Component, Input, } from '@angular/core';
import { GetAllProdutosResponse } from '../../models/produto.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})

export class CardComponent {
  @Input() produto: GetAllProdutosResponse | undefined;
  @Input() saldo: number | undefined;  
  quantidade: number = 1;
  
  get calcularPrecoTotal(): number{
    return this.produto ? this.produto.precoUnitario * this.quantidade : 0;
  }
  
  atualizarQuantidade(novaQuantidade: number) {
    this.quantidade = novaQuantidade;
  }
}


