import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from '../../../service/task.service';
import { Task } from '../../../model/task.model';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-view-task',
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './view-task.component.html',
  styleUrl: './view-task.component.scss',
  providers: [TaskService]
})
export class ViewTaskComponent implements OnInit {
  taskID: string | null = null;
  displayData: Task | null = null;
  constructor(private route: ActivatedRoute, private TaskService: TaskService){}



  ngOnInit(): void {
    this.taskID = this.route.snapshot.paramMap.get('id')
    if (this.taskID != null) {
      this.TaskService.findTask(this.taskID).subscribe((data) =>{
        this.displayData = data;
      });
    }
  }

  
}
