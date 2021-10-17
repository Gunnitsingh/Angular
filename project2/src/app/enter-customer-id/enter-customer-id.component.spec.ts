import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterCustomerIdComponent } from './enter-customer-id.component';

describe('EnterCustomerIdComponent', () => {
  let component: EnterCustomerIdComponent;
  let fixture: ComponentFixture<EnterCustomerIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnterCustomerIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterCustomerIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
