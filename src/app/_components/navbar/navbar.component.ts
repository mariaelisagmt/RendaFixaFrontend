import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {
  @Input() nome: string | undefined;
  
  obterNomeCliente(): string {
    return this.nome? "Olá "+ this.nome : "Olá, Cliente";
  }
}
