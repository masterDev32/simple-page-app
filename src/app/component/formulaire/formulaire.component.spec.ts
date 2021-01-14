import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppModule } from '../../app.module';
import { FormulaireComponent } from './formulaire.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonDataService } from 'src/app/service/common-data.service';
import { BsModalRef } from 'ngx-bootstrap';

describe('FormulaireComponent', () => {
  let component: FormulaireComponent;
  let fixture: ComponentFixture<FormulaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ AppModule ],
      providers: [CommonDataService, BsModalRef],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form should not be valid because title field length is 3', () => {
    component.form.controls.title.setValue('tit');
    component.form.controls.userId.setValue('1');
    component.form.controls.body.setValue('body');
    fixture.detectChanges();
    expect(component.form.valid).toEqual(false);
  });

  it('form should not be valid because body is required', () => {
    component.form.controls.title.setValue('first title');
    component.form.controls.userId.setValue('1');
    fixture.detectChanges();
    expect(component.form.valid).toEqual(false);
  });

  it('form should not be valid because userId is required', () => {
    component.form.controls.title.setValue('first title');
    component.form.controls.body.setValue('body');
    fixture.detectChanges();
    expect(component.form.valid).toEqual(false);
  });

  it('form should not be valid because title is required', () => {
    component.form.controls.userId.setValue('1');
    component.form.controls.body.setValue('body');
    fixture.detectChanges();
    expect(component.form.valid).toEqual(false);
  });

  it('form should be valid because title field length is > 5 and userId, body are set', () => {
    component.form.controls.title.setValue('first title');
    component.form.controls.userId.setValue('1');
    component.form.controls.body.setValue('body');
    fixture.detectChanges();
    expect(component.form.valid).toEqual(true);
  });
});
