import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ModalComponent } from '../../../shared/modal/modal.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-create-task',
  imports: [ModalComponent, CommonModule,FormsModule],
  templateUrl: './create-task.component.html',
  styleUrl: './create-task.component.scss'
})
export class CreateTaskComponent {
  @Input() openTaskModal = false;
  @Output() openTaskModalChange = new EventEmitter<boolean>();

  taskName: string = '';
  taskDescription: string = '';
  taskStatus: string = '';
  taskColor: string = '#ffffff';

  closeModal() {
    this.openTaskModalChange.emit(false);
  }

  saveData(){

    if (this.taskStatus == 'todo') {
      this.taskColor = '#c4ffff';
    }
    if (this.taskStatus == 'in-progress') {
      this.taskColor = '#ffc375';
    }
    if (this.taskStatus == 'done') {
      this.taskColor = '#7cff75';
    }

    const newTask = {
      id:Date.now(),
      taskName: this.taskName,
      taskDescription: this.taskDescription,
      taskStatus: this.taskStatus,
      taskColor: this.taskColor
    }
    const existingTasksJSON = localStorage.getItem('tasks');
    const existingTasks = existingTasksJSON ? JSON.parse(existingTasksJSON) : [];

    existingTasks.push(newTask);

    localStorage.setItem('tasks', JSON.stringify(existingTasks));

    this.taskName = '';
    this.taskDescription = '';
    this.taskStatus = '';
    this.taskColor = '#ffffff';

    console.log('Task saved:', newTask);
  }
}
