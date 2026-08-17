import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormGroupp } from './form-groupp';

describe('FormGroup', () => {
  let component: FormGroupp;
  let fixture: ComponentFixture<FormGroupp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormGroupp],
    }).compileComponents();

    fixture = TestBed.createComponent(FormGroupp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
