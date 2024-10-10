import { Component, Input, SimpleChanges, ViewChild, } from '@angular/core';
import { GetAllProdutosResponse } from '../../models/produto.model';
import { GetContaByIdResponse } from '../../models/conta.model';
import { CreateAporteRequest } from '../../models/aporterequest.mode';
import { RendaFixaService } from '../../services/rendafixa.service';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() produto: GetAllProdutosResponse | undefined;
  @Input() conta: GetContaByIdResponse | undefined;
  quantidade: number = 1;
  botaoBloqueado: boolean = false;
  constructor(private rendaFixaService: RendaFixaService) {}
  
  @ViewChild(ModalComponent) modal!: ModalComponent;

  ngOnInit(): void {
    this.bloquearBotao();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['produto']) {
      this.bloquearBotao();
    }
  }

  get calcularPrecoTotal(): number {
    return this.produto ? this.produto.precoUnitario * this.quantidade : 0;
  }

  atualizarQuantidade(novaQuantidade: number) {
    this.quantidade = novaQuantidade;
    this.bloquearBotao();
  }

  bloquearBotao(): void {
    if (this.verificarEstoque() || this.verificarSaldo()) 
      this.botaoBloqueado = true;
    else
      this.botaoBloqueado = false;
  }
  
  verificarEstoque(): boolean {
    if (this.produto != null && this.produto.estoque < this.quantidade) 
      return true;
    else
      return false;
  } 

verificarSaldo(): boolean {
  let valorTotal = (this.produto?.precoUnitario??1) * this.quantidade;
  let saldo = this.conta?.saldo??0;
    if (saldo < valorTotal)
      return true;
    else 
      return false;
  }
  
  realizarAporte(): void {
    this.bloquearBotao();

    if(this.verificarEstoque())
      this.modal.openModal('Estoque insuficiente!');

    if(this.verificarSaldo())
        this.modal.openModal('Saldo insuficiente!');

    if(!this.verificarEstoque() && !this.verificarSaldo() && this.conta != null && this.produto != null){
      const newAporte: CreateAporteRequest = {
        contaId: this.conta.id,      
        produtoId: this.produto.id,
        quantidade: this.quantidade
      };
      this.rendaFixaService.createAporte(newAporte).subscribe(
        response => {
          this.modal.openModal('Aporte realizado com sucesso');
        }, 
        error => {
          this.modal.openModal('Erro ao realizar o aporte');
        }
      );
    }
  }
}