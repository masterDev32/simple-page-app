import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppModule } from '../../app.module';
import { HandleCallService } from 'src/app/service/handle-call.service';

import { ModalComponent } from './modal.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('ModalComponent', () => {
  let component: ModalComponent;
  let fixture: ComponentFixture<ModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ AppModule ],
      providers: [ HandleCallService ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
