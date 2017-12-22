import { LoginComponent } from './components/login/login.component';
import { RouterModule } from '@angular/router';
import { UsersComponent } from './components/users/users.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AuthGuard } from 'app/services/login/auth.guard';
import {PayrollComponent } from './components/payroll/payroll.component';
import { HistoryComponent } from 'app/components/history/history.component';

const routes = [
    { path: 'login', component: LoginComponent },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'users', loadChildren: './components/users/users.module', canActivate: [AuthGuard] },
    { path: 'dashboard', component: DashboardComponent},//, canActivate: [AuthGuard] },
    { path: 'payroll', loadChildren: './components/payroll/payroll.module'},//, canActivate: [AuthGuard] },
    { path: 'history', loadChildren: './components/history/history.module'},//, canActivate: [AuthGuard] },
    { path: '**', component: NotFoundComponent}
]

export default RouterModule.forRoot(routes);
