import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HandleCallService } from './handle-call.service';
import { environment } from '../../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class CommonDataService {
  config = environment;
  users = [];
  posts = [];
  postsUserSubject: BehaviorSubject<any> = new BehaviorSubject(this.posts);

  constructor(public service: HandleCallService) {}

  loadData() {
    this.service.getData(`${this.config.endpoint}/users`).subscribe(users => this.users = users);
    this.service.getData(`${this.config.endpoint}/posts`)
      .subscribe(posts => {
        this.posts = posts;
        this.postsUserSubject.next(this.posts);
    });
  }

  getPosts(): Observable<any> {
    return this.postsUserSubject.asObservable();
  }

  getUserName(userId) {
    return this.users && this.users.length ? this.users.find(element => element.id === userId).name : '';
  }

  setSelectedUser(data): void {
    const response = data ? this.posts.filter(post => post.userId === data) : this.posts;
    this.postsUserSubject.next(response);
  }
}
