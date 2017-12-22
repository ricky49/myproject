import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import appRoutes from './app.routes';
import { DashboardComponent} from './components/dashboard/dashboard.component'
import UsersModule from 'app/components/users/users.module';
import { NotFoundComponent } from 'app/components/not-found/not-found.component';
import { FormsModule } from '@angular/forms';
import { AuthGuard } from 'app/services/login/auth.guard';
import PayrollModule from 'app/components/payroll/payroll.module';
import HistoryModule from 'app/components/history/history.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
    UsersModule,
    PayrollModule,
    HistoryModule,
    appRoutes
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
