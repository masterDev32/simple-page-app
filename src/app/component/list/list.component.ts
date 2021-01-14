import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { CommonDataService } from 'src/app/service/common-data.service';
import { takeUntil } from 'rxjs/operators';
import { BsModalService } from 'ngx-bootstrap';
import { FormulaireComponent } from '../formulaire/formulaire.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, OnDestroy {

  destroy = new Subject();
  posts = [];
  dataPerPage = [] 
 
  constructor(public commonData: CommonDataService, public modalService: BsModalService) { }

  ngOnInit() {
    this.commonData.getPosts().pipe(takeUntil(this.destroy))
      .subscribe(posts => {
        this.posts = posts;
        this.dataPerPage = this.posts.slice(0, 10);
      });
  }

  ngOnDestroy() {
    this.destroy.next();
    this.destroy.complete();
  }

  editPost(post) {
    const { body, title, userId } = post;
    const initialState = { 
      body,
      title,
      userId
    };
    this.modalService.show(FormulaireComponent, { initialState });
  }

  pageChanged(event): void {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.dataPerPage = this.posts.slice(startItem, endItem);
  }
}
