import { Component, EventEmitter, Input, Output } from '@angular/core';
import { GetAllProdutosResponse } from '../../models/produto.model';
import { RendaFixaService } from '../../services/rendafixa.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})

export class CardComponent {
  constructor(private rendaFixaService: RendaFixaService) {}
  @Input() produto: GetAllProdutosResponse | undefined; 
  quantidade: number = 1;
  
  get calcularPrecoTotal(): number{
    return this.produto ? this.produto.precoUnitario * this.quantidade : 0;
  }
  
  atualizarQuantidade(novaQuantidade: number) {
    this.quantidade = novaQuantidade;
  }
}


