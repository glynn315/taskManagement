import { Component } from '@angular/core';
import { RouterLink, RouterOutlet, Router } from '@angular/router';
import { LucideAngularModule, ArrowRight ,FileIcon } from 'lucide-angular';
@Component({
  selector: 'app-home',
  imports: [LucideAngularModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  readonly ArrowRight = ArrowRight;

  constructor(private router: Router) {}
  login(){
    this.router.navigate(['/task']);
  }
}
