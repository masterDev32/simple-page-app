import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap';
import { CommonDataService } from 'src/app/service/common-data.service';
import { HandleCallService } from 'src/app/service/handle-call.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  content = new FormControl('', [
    Validators.required,
    Validators.minLength(5)
  ]);
  title = 'New Post';

  constructor(public bsModalRef: BsModalRef, public commonData: CommonDataService) { }

  ngOnInit() {}

  save() {
    this.commonData.service.save(`${this.commonData.config.endpoint}/users`, { body: this.content.value, title: this.title });
    this.bsModalRef.hide();
  }

}
