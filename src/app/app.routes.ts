import { Routes } from '@angular/router';
import { TaskMonitoringComponent } from './views/task-monitoring/task-monitoring.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { LayoutComponent } from './layout/layout/layout.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: '', component: LayoutComponent, 
        children:[
            { path: 'task', component: TaskMonitoringComponent },
        ]
    },
    { path: 'home', component: HomeComponent},
];
