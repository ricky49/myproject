import { Component, OnInit } from '@angular/core';
import {UsersService} from '../../services/users/users.service';
import { Users } from 'app/models/users';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {

  users: Users[] = [];

  constructor(private userService: UsersService) { }

  ngOnInit() {
   this.getUsers();
  }

  getUsers(): void {
  this.userService.getUsers().
  subscribe(users => this.users = users);

  }

}
