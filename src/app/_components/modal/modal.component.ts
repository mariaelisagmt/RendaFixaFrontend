import { Component } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  isOpen: boolean = false;
  
  openModal() {
    this.isOpen = true;
  }
  
  closeModal() {
    this.isOpen = false;
    window.location.reload();
  }
}
