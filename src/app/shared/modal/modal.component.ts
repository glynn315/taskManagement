import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {

  @Input() isVisible = false;
  @Input() title: string = 'Sample Modal';
  @Output() close = new EventEmitter<void>();

  closeModal() {
    this.close.emit();
  }

}
