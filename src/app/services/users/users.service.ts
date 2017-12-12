import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Users } from 'app/models/users';
import { of } from 'rxjs/observable/of';
import {USERS} from '../../mocks/users.mocks';

@Injectable()
export class UsersService {
 private isUserLoggedIn;
 private username;

  getUsers(): Observable <Users []> {
    return of (USERS);
  }

  constructor() {
    this.isUserLoggedIn = false;
  }
  setUserLogIn() {
   this.isUserLoggedIn = true;
  }
  getUserLogIn() {
    return this.isUserLoggedIn;
  }
}
