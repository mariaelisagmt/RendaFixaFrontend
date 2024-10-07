import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  isOpen: boolean = false;
  mensagem: string = "Mensagem";

  openModal(dados : string) {
    this.isOpen = true;
    this.mensagem = dados;
  }
  
  closeModal() {
    this.isOpen = false;
    window.location.reload();
  }
}
