import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Todoo } from './todoo';

describe('Todoo', () => {
  let component: Todoo;
  let fixture: ComponentFixture<Todoo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Todoo],
    }).compileComponents();

    fixture = TestBed.createComponent(Todoo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
