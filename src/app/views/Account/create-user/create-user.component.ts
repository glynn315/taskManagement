import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ModalComponent } from '../../../shared/modal/modal.component';

@Component({
  selector: 'app-create-user',
  imports: [ModalComponent],
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.scss'
})
export class CreateUserComponent {
  @Input() openUserModal = false;
  @Output() openTaskModalChange = new EventEmitter<boolean>();

  closeModal(){
    this.openUserModal = false;
  }
}
