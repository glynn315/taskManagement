import { Routes } from '@angular/router';
import { TaskMonitoringComponent } from './views/task-monitoring/task-monitoring.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { LayoutComponent } from './layout/layout/layout.component';
import { DashboardComponent } from './views/Dashboard/dashboard/dashboard.component';
import { ReportComponent } from './views/Reports/report/report.component';
import { UserDisplayComponent } from './views/User/user-display/user-display.component';
import { TimeManagementComponent } from './views/Time/time-management/time-management.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: '', component: LayoutComponent, 
        children:[
            { path: 'task', component: TaskMonitoringComponent },
            { path: 'dashboard', component: DashboardComponent },
            { path: 'reports', component: ReportComponent },
            { path: 'user', component: UserDisplayComponent, },
            { path: 'time', component: TimeManagementComponent, },
        ]
    },
    { path: 'home', component: HomeComponent},
];
