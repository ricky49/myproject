import { LoginComponent } from 'app/login/login.component';
import { RouterModule } from '@angular/router';
import { UsersComponent } from 'app/users/users.component';
import { DashboardComponent } from 'app/dashboard/dashboard.component';

const routes = [
    { path: '', component: LoginComponent },
    { path: 'users', component: UsersComponent },
    { path: 'dashboard', component: DashboardComponent }
]

export default RouterModule.forRoot(routes);
