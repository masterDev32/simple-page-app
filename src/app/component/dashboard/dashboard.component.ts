import { Component, OnInit } from '@angular/core';
import { HandleCallService } from 'src/app/service/handle-call.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  showList = true;
  users;
  selectedUser;
  constructor(public service: HandleCallService) { }

  ngOnInit() {
    this.loadUsers();
  }

  toggleCreatePost() {
    this.showList = !this.showList;
  }

  loadUsers() {
    this.service.getData('http://jsonplaceholder.typicode.com/users')
    .then(response => this.users = response)
    .catch(err => console.log('error', err))
  }

  selectChange(username) {
    const user = this.users.filter(user => user.name === username);
    this.selectedUser = user.length ? user[0].id : '0';
  }

}
