import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-quantity-input',
  templateUrl: './quantity-input.component.html',
  styleUrls: ['./quantity-input.component.css']
})

export class QuantityInputComponent {
  @Input() saldo : number | undefined;
  @Input() preco : number | undefined;
  @Input() estoque : number | undefined;
  @Output() mudarQuantidade = new EventEmitter<number>();
  quantidade: number = 1;
  incrementarDesabilitado: boolean = false;

  validarSaldo(incrementar: boolean) : void {
    const preco = this.preco ?? 0;
    const quantidadeAtual = this.quantidade;
    const totalAtual = preco * quantidadeAtual;
  
    this.incrementarDesabilitado = totalAtual > (this.saldo ?? 0);
  
    if (incrementar) {
      const totalIncrementar = preco * (quantidadeAtual + 1);
      this.incrementarDesabilitado = this.incrementarDesabilitado || totalIncrementar > (this.saldo ?? 0);
    }

    if (this.estoque != null && this.estoque <= this.quantidade)
      this.incrementarDesabilitado = true;
  }

  calcularPreco() : void{
    let total = (this.preco??0) * (this.quantidade);
    if (total > (this.saldo??0))
      this.quantidade = 1;
    
    this.mudarQuantidade.emit(this.quantidade);
  }

  incrementarValor() : void {
    this.validarSaldo(true);
    if (!this.incrementarDesabilitado) {
      this.quantidade++;
      this.mudarQuantidade.emit(this.quantidade);
    }
  }
  
  decrementarValor(): void {
    this.validarSaldo(false);
    if (this.quantidade > 1) {
      this.quantidade--;
      this.mudarQuantidade.emit(this.quantidade);
    }
  }
}
