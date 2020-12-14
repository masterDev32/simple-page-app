import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HandleCallService } from 'src/app/service/handle-call.service';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.scss']
})

export class FormulaireComponent implements OnInit {

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
  constructor(public service: HandleCallService) { }

  ngOnInit() {
  }

  save() {
    this.service.save('http://jsonplaceholder.typicode.com/posts',
    { 
      body: this.form.controls.body.value,
      title: this.form.controls.title.value,
      userId: this.form.controls.userId.value 
    })
    .then(response => console.log(response))
    .catch(err => {
      console.log('error', err);
    })
  }
}
