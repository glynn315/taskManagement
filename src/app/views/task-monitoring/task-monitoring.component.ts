import { Component, OnInit } from '@angular/core';
import { LucideAngularModule, AlarmClock,ArrowRight } from 'lucide-angular';
import { CreateTaskComponent } from './create-task/create-task.component';
import { HttpClientJsonpModule } from '@angular/common/http';
import { TaskService } from '../../service/task.service';
import { Task } from '../../model/task.model';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
@Component({
  selector: 'app-task-monitoring',
  imports: [LucideAngularModule, CreateTaskComponent, CommonModule],
  templateUrl: './task-monitoring.component.html',
  styleUrl: './task-monitoring.component.scss',
  providers: [TaskService]
})
export class TaskMonitoringComponent implements OnInit{

  TaskList: Task[] = [];
  constructor(private TaskServices: TaskService, private router: Router){}
  ngOnInit(): void {
    this.displayTask();
  }

  displayTask(){
    this.TaskServices.taskList().subscribe((data) => {
      this.TaskList = data;
    });
  }

  openTaskModal = false;
  readonly AlarmClock = AlarmClock;
  readonly ArrowRight = ArrowRight;
  

  openModal(){
    this.openTaskModal = true;
  }
  closeModal() {
    this.openTaskModal = false;
  }
  viewTask(task_id? : string):void{
    if (!task_id) {
      
    }

    this.router.navigate(['/viewTask', task_id]);
  }
}
