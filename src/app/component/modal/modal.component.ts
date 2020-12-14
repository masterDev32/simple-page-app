import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { HandleCallService } from 'src/app/service/handle-call.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  error = false;
  @Input() body;
  @Input() title;
  @Input() show;
  @Output() showChanged = new EventEmitter();
  constructor(public service: HandleCallService) { }

  ngOnInit() {
  }

  modalClosed() {
    this.showChanged.emit(false);
  }

  save() {
    this.service.save('http://jsonplaceholder.typicode.com/users', { body: this.body, title: this.title })
    .then(response => console.log(response))
    .catch(err => {
      console.log('error', err);
      this.error = true;
    })
    this.showChanged.emit(false);
  }

}
