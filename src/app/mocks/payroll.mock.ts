import { Payroll } from '../models/payroll';

const payments = 25000;
const tax = payments * 0.18;
const total = payments - tax;

export const PAYROLLS: Payroll[] = [
  { id: 1, name: 'Ricky', lastname: 'Soto', mail: 'test1@correo.com', document: 40412345678, payment: payments, taxes: tax, total_payment: total}
]
