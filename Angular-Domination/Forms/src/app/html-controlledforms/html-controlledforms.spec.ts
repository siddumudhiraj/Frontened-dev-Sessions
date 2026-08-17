import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlControlledforms } from './html-controlledforms';

describe('HtmlControlledforms', () => {
  let component: HtmlControlledforms;
  let fixture: ComponentFixture<HtmlControlledforms>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HtmlControlledforms],
    }).compileComponents();

    fixture = TestBed.createComponent(HtmlControlledforms);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
