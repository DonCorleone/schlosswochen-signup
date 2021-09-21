import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklyReservationComponent } from './weekly-reservation.component';

describe('WeeklyReservationComponent', () => {
  let component: WeeklyReservationComponent;
  let fixture: ComponentFixture<WeeklyReservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeeklyReservationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeeklyReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
