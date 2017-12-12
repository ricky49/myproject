import { LoginComponent } from './components/login/login.component';
import { RouterModule } from '@angular/router';
import { UsersComponent } from './components/users/users.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NotFoundComponent } from 'app/components/not-found/not-found.component';
import { AuthGuard } from 'app/services/login/auth.guard';

const routes = [
    { path: 'login', component: LoginComponent },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'users', loadChildren: './components/users/users.module', canActivate: [AuthGuard] },
    { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
    { path: '**', component: NotFoundComponent}
]

export default RouterModule.forRoot(routes);
