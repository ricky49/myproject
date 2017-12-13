import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { NgModel } from '@angular/forms/src/directives/ng_model';
import { UsersService } from 'app/services/users/users.service';
import { Users } from 'app/models/users';
import { forEach } from '@angular/router/src/utils/collection';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
users: Users [];
  constructor(private usersService: UsersService,
              private router: Router) { }

  ngOnInit() {
    this.getUsers();
  }

loginUser(f: NgModel) {

  const currentUser = f.value;

  this.users.every((x, index) => {

    if ( x.mail === currentUser.mail && x.password === currentUser.password ) {
      this.usersService.setUserLogIn();
      this.router.navigate(['dashboard']);
      return false;
    } else {
      console.log('autenticacion fallo');
    }

  });

}
 getUsers() {
 this.usersService.getUsers()
 .subscribe(users => this.users = users);
 }
}
