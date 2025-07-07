import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ModalComponent } from '../../../shared/modal/modal.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../../../service/task.service';
import { Task } from '../../../model/task.model';
import { HttpClient, HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-create-task',
  imports: [ModalComponent, CommonModule,FormsModule, HttpClientModule],
  templateUrl: './create-task.component.html',
  styleUrl: './create-task.component.scss',
  providers: [TaskService]
})
export class CreateTaskComponent implements OnInit {

  constructor(private taskServices: TaskService){}
  TaskFields: Task = {
    task_label: '',
    task_description: '',
    task_status: ''
  }
  ngOnInit(): void {
    
  }
  @Input() openTaskModal = false;
  @Output() openTaskModalChange = new EventEmitter<boolean>();

  closeModal() {
    this.openTaskModalChange.emit(false);
  }

  saveData(){
    this.taskServices.addTask(this.TaskFields).subscribe(() => {
      this.openTaskModalChange.emit(false);
    });
  }
}
