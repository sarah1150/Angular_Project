import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.component.html',
  styleUrls: ['./userslist.component.css'],
})
export class UserslistComponent implements OnInit {
  userlist: any = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get('https://reqres.in/api/users?page=1')
      .subscribe((users: any) => {
        this.userlist = users.data;
      });
  }

  onClickMore() {
    this.http
      .get('https://reqres.in/api/users?page=2')
      .subscribe((usersPageTwo: any) => {
        this.userlist = usersPageTwo.data;
      });
  }
}
