import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-task',
  imports: [CommonModule, FormsModule],
  templateUrl: './view-task.component.html',
  styleUrl: './view-task.component.scss'
})
export class ViewTaskComponent implements OnInit {
  taskID: string | null = null;

  constructor(private route: ActivatedRoute){}

  ngOnInit(): void {
    this.taskID = this.route.snapshot.paramMap.get('id')
  }

  
}
