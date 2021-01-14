import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap';
import { CommonDataService } from 'src/app/service/common-data.service';
import { HandleCallService } from 'src/app/service/handle-call.service';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.scss']
})

export class FormulaireComponent implements OnInit {

  body = '';
  title = '';
  userId = '';
  form = new FormGroup({
    title: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(100)
    ]),
    userId: new FormControl('', [
      Validators.required
    ]),
    body: new FormControl('', [
      Validators.required
    ])
  })
  constructor(public bsModalRef: BsModalRef, public commonData: CommonDataService) { }

  ngOnInit() {
    this.form.controls.body.setValue(this.body);
    this.form.controls.title.setValue(this.title);
    this.form.controls.userId.setValue(this.userId);
  }

  save() {
    this.commonData.service.save(`${this.commonData.config.endpoint}/posts`,
    { 
      body: this.form.controls.body.value,
      title: this.form.controls.title.value,
      userId: this.form.controls.userId.value 
    });
    this.bsModalRef.hide();
  }
}
