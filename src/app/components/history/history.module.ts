import {CommonModule} from '@angular/common';
import { NgModule } from '@angular/core';
import { HistoryComponent } from './history.component';
import historyRoutes from './history.routes';
import {FormsModule} from '@angular/forms'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    HistoryComponent
  ],
  imports: [
    FormsModule,
    NgbModule,
    CommonModule,
    historyRoutes
  ],
  providers: []
})
export default class HistoryModule {}
