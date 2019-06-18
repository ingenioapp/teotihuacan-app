import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntretenimientoPage } from './entretenimiento.page';

describe('EntretenimientoPage', () => {
  let component: EntretenimientoPage;
  let fixture: ComponentFixture<EntretenimientoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntretenimientoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntretenimientoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
