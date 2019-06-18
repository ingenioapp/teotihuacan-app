import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CulturaPage } from './cultura.page';

describe('CulturaPage', () => {
  let component: CulturaPage;
  let fixture: ComponentFixture<CulturaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CulturaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CulturaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
