import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewUserSucessfulComponent } from './new-user-sucessful.component';

describe('NewUserSucessfulComponent', () => {
  let component: NewUserSucessfulComponent;
  let fixture: ComponentFixture<NewUserSucessfulComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewUserSucessfulComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewUserSucessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
