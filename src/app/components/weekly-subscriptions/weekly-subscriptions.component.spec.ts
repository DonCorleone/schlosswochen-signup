import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklySubscriptionsComponent } from './weekly-subscriptions.component';

describe('WeeklySubscriptionsComponent', () => {
  let component: WeeklySubscriptionsComponent;
  let fixture: ComponentFixture<WeeklySubscriptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeeklySubscriptionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeeklySubscriptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
