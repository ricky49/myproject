import { RouterModule } from '@angular/router';
import { HistoryComponent } from './history.component';

const routes = [
    { path: 'history', component: HistoryComponent }
]


export default RouterModule.forChild(routes)
