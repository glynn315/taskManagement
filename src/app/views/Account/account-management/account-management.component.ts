import { Component } from '@angular/core';
import { CreateUserComponent } from "../create-user/create-user.component";

@Component({
  selector: 'app-account-management',
  imports: [CreateUserComponent],
  templateUrl: './account-management.component.html',
  styleUrl: './account-management.component.scss'
})
export class AccountManagementComponent {
  openUserModal = false;

  openModal(){
    this.openUserModal = true;
  }
  closeModal() {
    this.openUserModal = false;
  }
}
