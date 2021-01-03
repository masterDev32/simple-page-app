import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppModule } from '../../app.module';
import { HandleCallService } from '../../service/handle-call.service';

import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  const mockedResponse = [{
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
  },
  {
    id: 2,
    name: 'Leon Graham',
    username: 'Leon',
    email: 'leon@april.biz',
  }];
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ AppModule ],
      providers: [ HandleCallService ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    window.fetch = () => <any>Promise.resolve({
      json: () => mockedResponse
    })
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('User data should be set', () => {
    component.ngOnInit();
    expect(component.users).toEqual(mockedResponse);
  });

  /* it('selectedUser should be 2', () => {
    component.ngOnInit();
    fixture.detectChanges();
    component.selectChange('Leon');
    expect(component.selectedUser).toEqual(2);
  }); */
});
