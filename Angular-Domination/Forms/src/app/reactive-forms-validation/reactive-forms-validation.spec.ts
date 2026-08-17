import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormsValidation } from './reactive-forms-validation';

describe('ReactiveFormsValidation', () => {
  let component: ReactiveFormsValidation;
  let fixture: ComponentFixture<ReactiveFormsValidation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsValidation],
    }).compileComponents();

    fixture = TestBed.createComponent(ReactiveFormsValidation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
