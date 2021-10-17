import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmineditformComponent } from './admineditform.component';

describe('AdmineditformComponent', () => {
  let component: AdmineditformComponent;
  let fixture: ComponentFixture<AdmineditformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmineditformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmineditformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
