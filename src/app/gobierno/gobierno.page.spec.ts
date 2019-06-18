import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GobiernoPage } from './gobierno.page';

describe('GobiernoPage', () => {
  let component: GobiernoPage;
  let fixture: ComponentFixture<GobiernoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GobiernoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GobiernoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
