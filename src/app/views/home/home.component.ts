import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { LucideAngularModule, ArrowRight ,FileIcon } from 'lucide-angular';
@Component({
  selector: 'app-home',
  imports: [LucideAngularModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  readonly ArrowRight = ArrowRight;

}
