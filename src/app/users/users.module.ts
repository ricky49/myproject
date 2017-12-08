import {CommonModule} from '@angular/common';
import { NgModule } from '@angular/core';
import { UsersComponent } from './users.component';
import usersRoutes from './users.route';
import {FormsModule} from '@angular/forms'

@NgModule({
  declarations: [
    UsersComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    usersRoutes,
  ],
  providers: []
})
export default class UsersModule {}
