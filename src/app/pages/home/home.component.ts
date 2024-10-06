import { Component, OnInit } from '@angular/core';
import { RendaFixaService } from '../../services/rendafixa.service';
import { GetAllProdutosResponse } from '../../models/produto.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent implements OnInit{
  produtos: GetAllProdutosResponse [] = [];

  constructor(private rendaFixaService: RendaFixaService) {}

  ngOnInit(): void {
    this.loadProdutos();
  }

  loadProdutos(): void {
    this.rendaFixaService.getAllProdutos().subscribe(data => {
      this.produtos = data;
      console.log(data);
    });
  }
}
