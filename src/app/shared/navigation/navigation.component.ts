import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule , LayoutDashboard , UserCircle, Clock3, File, FileCheck2Icon} from 'lucide-angular';

@Component({
  selector: 'app-navigation',
  imports: [LucideAngularModule, RouterLink],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent {
  readonly LayoutDashboard = LayoutDashboard;
  readonly User = UserCircle;
  readonly Clock = Clock3;
  readonly Report = File;
  readonly Task = FileCheck2Icon;
}
