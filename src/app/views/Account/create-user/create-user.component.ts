import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { ModalComponent } from '../../../shared/modal/modal.component';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from '../../../service/user.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { User } from '../../../model/user.model';

@Component({
  selector: 'app-create-user',
  imports: [ModalComponent, HttpClientModule, FormsModule, CommonModule],
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.scss',
  providers: [UserService],
})
export class CreateUserComponent implements OnInit {
  @Input() openUserModal = false;
  @Output() openTaskModalChange = new EventEmitter<boolean>();
  UserFields: User = {
    user_id: '',
    firstName: '',
    lastName: '',
    email: '',
    user_Role: ''
  }

  constructor(private UserService: UserService){}


  ngOnInit(): void {
    
  }
  closeModal(){
    this.openUserModal = false;
  }

  addNewUser(){
    this.UserService.createUser(this.UserFields).subscribe(() => {
      this.openUserModal = false;
    })
  }

}
