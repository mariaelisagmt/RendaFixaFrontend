import { Component, Input, } from '@angular/core';
import { GetAllProdutosResponse } from '../../models/produto.model';
import { GetContaByIdResponse } from '../../models/conta.model';
import { CreateAporteRequest } from '../../models/aporterequest.mode';
import { RendaFixaService } from '../../services/rendafixa.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() produto: GetAllProdutosResponse | undefined;
  @Input() conta: GetContaByIdResponse | undefined;  
  quantidade: number = 1;

  constructor(private rendaFixaService: RendaFixaService) {}
  
  get calcularPrecoTotal(): number{
    return this.produto ? this.produto.precoUnitario * this.quantidade : 0;
  }
  
  atualizarQuantidade(novaQuantidade: number) {
    this.quantidade = novaQuantidade;
  }

  realizarAporte(): void {
    if(this.conta != null && this.produto != null){

      const newAporte: CreateAporteRequest = {
        contaId: this.conta.id,      
        produtoId: this.produto.id,
        quantidade: this.quantidade
      };
      this.rendaFixaService.createAporte(newAporte).subscribe(
        response => {
          console.log('Aporte realizado com sucesso', response);
        }, 
        error => {
          console.error('Erro ao realizar o aporte', error);
        }
      );
    }
  }
}