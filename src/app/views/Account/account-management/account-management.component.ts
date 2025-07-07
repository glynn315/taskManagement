import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CreateUserComponent } from "../create-user/create-user.component";
import { UserService } from '../../../service/user.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { User } from '../../../model/user.model';

@Component({
  selector: 'app-account-management',
  imports: [CreateUserComponent, HttpClientModule, CommonModule, FormsModule],
  templateUrl: './account-management.component.html',
  styleUrl: './account-management.component.scss',
  providers: [UserService]
})
export class AccountManagementComponent implements OnInit {
[x: string]: any;

  UserList: User[] = [];

  constructor(private UserService: UserService){}
  @Output() userCreated = new EventEmitter<User>();

  onUserCreated(res: User) {
    this.userCreated.emit(res);
  }

  ngOnInit(): void {
    this.displayData();
  }

  displayData(){
    this.UserService.getUsers().subscribe((data) => {
      this.UserList = data;
    })
  }

  openUserModal = false;
  
  openModal(){
    this.openUserModal = true;
  }
  closeModal() {
    this.openUserModal = false;
  }
}
