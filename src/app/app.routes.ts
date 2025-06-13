import { Routes } from '@angular/router';
import { TaskMonitoringComponent } from './views/task-monitoring/task-monitoring.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';

export const routes: Routes = [
    { path: 'task', component: TaskMonitoringComponent },
    { path: 'home', component: HomeComponent},
    {path: '', redirectTo: '/home', pathMatch: 'full'},
];
