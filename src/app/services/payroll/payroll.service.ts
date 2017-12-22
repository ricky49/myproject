import { Injectable } from '@angular/core';
import {Payroll } from '../../models/payroll'
import { Observable } from 'rxjs/Observable';
import { Users } from 'app/models/users';
import {PAYROLLS} from '../../mocks/payroll.mock';
import { of } from 'rxjs/observable/of';

@Injectable()
export class PayrollService {

  constructor() { }

  getPayroll(): Observable<Payroll[]> {
   return of (PAYROLLS);
  }

}
