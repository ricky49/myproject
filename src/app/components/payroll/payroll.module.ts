import {CommonModule} from '@angular/common';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { PayrollComponent } from 'app/components/payroll/payroll.component';
import payrollRoutes from './payroll.route';
import { PayrollService } from 'app/services/payroll/payroll.service';

@NgModule({
  declarations: [
    PayrollComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    payrollRoutes
  ],
  providers: [PayrollService]
})
export default class PayrollModule {}
