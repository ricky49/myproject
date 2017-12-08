import { RouterModule } from '@angular/router';
import { UsersComponent } from './users.component';

const routes = [
    { path: '', component: UsersComponent }
]

export default RouterModule.forChild(routes)
