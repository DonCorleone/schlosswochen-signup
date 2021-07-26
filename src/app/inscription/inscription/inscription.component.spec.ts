import { ComponentFixture, TestBed } from '@angular/core/testing';

import { inscriptionComponent } from './inscription.component';

describe('inscriptionComponent', () => {
  let component: inscriptionComponent;
  let fixture: ComponentFixture<inscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ inscriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(inscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
