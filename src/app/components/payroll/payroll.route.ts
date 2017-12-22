import { RouterModule } from '@angular/router';
import { PayrollComponent } from 'app/components/payroll/payroll.component';


const routes = [
    { path: 'payroll', component: PayrollComponent }
]

export default RouterModule.forChild(routes)
