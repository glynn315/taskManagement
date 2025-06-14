import { Component } from '@angular/core';
import { LucideAngularModule, AlarmClock } from 'lucide-angular';
import { CreateTaskComponent } from './create-task/create-task.component';
@Component({
  selector: 'app-task-monitoring',
  imports: [LucideAngularModule, CreateTaskComponent],
  templateUrl: './task-monitoring.component.html',
  styleUrl: './task-monitoring.component.scss'
})
export class TaskMonitoringComponent {
  openTaskModal = false;
  readonly AlarmClock = AlarmClock;

  openModal(){
    this.openTaskModal = true;
  }
  closeModal() {
    this.openTaskModal = false;
  }
}
