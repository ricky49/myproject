import { Component, OnInit } from '@angular/core';
import { PayrollService } from 'app/services/payroll/payroll.service';
import { Payroll } from 'app/models/payroll';

@Component({
  selector: 'app-payroll',
  templateUrl: './payroll.component.html',
  styleUrls: ['./payroll.component.css']
})
export class PayrollComponent implements OnInit {
  payrolls: Payroll[] = [];

  constructor(private payrollServices: PayrollService) { }

  ngOnInit() {
    this.getPayroll();
  }

  getPayroll(): void {
  this.payrollServices.getPayroll().
  subscribe(payrolls => this.payrolls = payrolls);
  }


}
