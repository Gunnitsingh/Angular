import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimfromComponent } from './claimfrom.component';

describe('ClaimfromComponent', () => {
  let component: ClaimfromComponent;
  let fixture: ComponentFixture<ClaimfromComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClaimfromComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaimfromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
