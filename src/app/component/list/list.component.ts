import { Component, Input, OnInit } from '@angular/core';
import { HandleCallService } from 'src/app/service/handle-call.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  allPosts;
  posts = [];
  showModal = false;
  body = '';
  title = '';
  @Input() users = [];
  @Input() set userValueChanged(value) {
    if (value) {
      this.userChanged(value);
    }
  };
  constructor(public service: HandleCallService) { }

  ngOnInit() {
    this.loadData()
  }

  loadData() {
    this.service.getData('http://jsonplaceholder.typicode.com/posts')
    .then(response => {
      this.allPosts = response;
      this.posts = [...this.allPosts];
    })
    .catch(err => console.log('error', err))
  }

  getUserName(userId) {
    return this.users && this.users.length ? this.users.find(element => element.id === userId).name : '';
  }

  editPost(post) {
    this.showModal = true;
    this.body = post.body;
    this.title = post.title;
  }

  updateShowModal(value) {
    this.showModal = value;
  }

  userChanged(newUserId) {
    this.posts = parseInt(newUserId, 10) > 0 ? this.allPosts.filter(post => post.userId === newUserId) : this.allPosts;
  }
}
