import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerCareDisplayDetailsComponent } from './customer-care-display-details.component';

describe('CustomerCareDisplayDetailsComponent', () => {
  let component: CustomerCareDisplayDetailsComponent;
  let fixture: ComponentFixture<CustomerCareDisplayDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerCareDisplayDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerCareDisplayDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
