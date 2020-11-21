import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransationSuccessComponent } from './transation-success.component';

describe('TransationSuccessComponent', () => {
  let component: TransationSuccessComponent;
  let fixture: ComponentFixture<TransationSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransationSuccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransationSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
