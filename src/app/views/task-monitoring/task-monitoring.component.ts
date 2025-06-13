import { Component } from '@angular/core';
import { LucideAngularModule, AlarmClock } from 'lucide-angular';

@Component({
  selector: 'app-task-monitoring',
  imports: [LucideAngularModule],
  templateUrl: './task-monitoring.component.html',
  styleUrl: './task-monitoring.component.scss'
})
export class TaskMonitoringComponent {
  readonly AlarmClock = AlarmClock;
}
