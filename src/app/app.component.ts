import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LucideAngularModule, ArrowRight ,FileIcon } from 'lucide-angular';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LucideAngularModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  readonly FileIcon = FileIcon;
  readonly ArrowRight = ArrowRight;
  title = 'taskManagement';
}
