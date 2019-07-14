import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GobernantePage } from './gobernante.page';

describe('GobernantePage', () => {
  let component: GobernantePage;
  let fixture: ComponentFixture<GobernantePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GobernantePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GobernantePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
