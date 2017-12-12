import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { NgModel } from '@angular/forms/src/directives/ng_model';
import { UsersService } from 'app/services/users/users.service';
import { Users } from 'app/models/users';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
users: Users [];
  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.getUsers();
  }

loginUser(f: NgModel) {
  const currentUser = f.value;

  for (let user of this.users){
    if ( user.mail === currentUser.mail && user.password === currentUser.password)
    {
       console.log(user.mail);
    }
  }

}
 getUsers() {
 this.usersService.getUsers()
 .subscribe(Users => this.users = Users);
 }
}
