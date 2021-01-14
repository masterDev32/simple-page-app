import { Component, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap';
import { CommonDataService } from 'src/app/service/common-data.service';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(public commonData: CommonDataService, public modalService: BsModalService) { }

  ngOnInit() {
    this.commonData.loadData();
  }

  openModal() {
    this.modalService.show(ModalComponent);
  }

  selectChange(username) {
    const user = this.commonData.users.filter(user => user.name === username);
    this.commonData.setSelectedUser(user.length ? user[0].id : 0);
  }
}
