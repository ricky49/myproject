import {CommonModule} from '@angular/common';
import { NgModule } from '@angular/core';
import { UsersComponent } from './users.component';
import usersRoutes from './users.route';
import {FormsModule} from '@angular/forms'
import { UsersService } from 'app/services/users/users.service';

@NgModule({
  declarations: [
    UsersComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    usersRoutes
  ],
  providers: [UsersService]
})
export default class UsersModule {}
