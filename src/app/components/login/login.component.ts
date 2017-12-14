import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { NgModel } from '@angular/forms/src/directives/ng_model';
import { UsersService } from 'app/services/users/users.service';
import { Users } from 'app/models/users';
import { forEach } from '@angular/router/src/utils/collection';
import { Router } from '@angular/router';
import {Subject} from 'rxjs/Subject';
import {debounceTime} from 'rxjs/operator/debounceTime';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  users: Users[];
  staticAlertClosed = false;
  failMessage: string;
  private _fail = new Subject<string>();

  constructor(private usersService: UsersService,
    private router: Router) { }

  ngOnInit() {
    this.getUsers();
    this._fail.subscribe((message) => this.failMessage = message);
    debounceTime.call(this._fail, 3000).subscribe(() => this.failMessage = null);
  }

  loginUser(f: NgModel) {

    const currentUser = f.value;

    this.users.every((x, index) => {

      if (x.mail === currentUser.mail && x.password === currentUser.password) {
        this.usersService.setUserLogIn();
        this.router.navigate(['dashboard']);
        return false;

      } else {
        this._fail.next('Usuario o contraseña incorrecto');
      }

    });

  }
  getUsers() {
    this.usersService.getUsers()
      .subscribe(users => this.users = users);
  }

}
