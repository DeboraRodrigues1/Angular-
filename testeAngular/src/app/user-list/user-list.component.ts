import { User } from './../model/user';
import { UserService } from './../service/user.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  public listaDeUser: User[];                                                                                                                                                                                    
  constructor(private UserService: UserService) { }

  users: User[];
  ngOnInit() {
    this.findAll();
  }

  findAll() {
    this.UserService.getAll().subscribe((usersOut: User[]) => {
      this.users = usersOut;
    })
  }

}
