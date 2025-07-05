import { Component } from '@angular/core';
import { LucideAngularModule, AlarmClock,ArrowRight } from 'lucide-angular';
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
  readonly ArrowRight = ArrowRight;
  

  openModal(){
    this.openTaskModal = true;
  }
  closeModal() {
    this.openTaskModal = false;
  }
}
