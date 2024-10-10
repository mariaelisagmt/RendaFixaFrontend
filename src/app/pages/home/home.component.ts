import { Component, OnInit } from '@angular/core';
import { RendaFixaService } from '../../services/rendafixa.service';
import { GetAllProdutosResponse } from '../../models/produto.model';
import { GetClienteByIdResponse } from '../../models/cliente.model';
import { GetContaByIdResponse } from '../../models/conta.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent implements OnInit{
  produtos: GetAllProdutosResponse [] = [];
  cliente: GetClienteByIdResponse | undefined;
  conta: GetContaByIdResponse | undefined;

  constructor(private rendaFixaService: RendaFixaService) {}

  ngOnInit(): void {
    this.getCliente();
    this.getConta();
    this.loadProdutos();
  }

  loadProdutos(): void {
    this.rendaFixaService.getAllProdutos().subscribe(data => {
      this.produtos = data;
      console.log(data);
    });
  }

  getCliente(): void{
    this.rendaFixaService.getCliente().subscribe(data => {
      this.cliente = data; 
      console.log(data)
    });
  }

  getConta(): void{
    this.rendaFixaService.getConta().subscribe(data => {
      this.conta = data; 
      console.log(data)
    });
  }
}
