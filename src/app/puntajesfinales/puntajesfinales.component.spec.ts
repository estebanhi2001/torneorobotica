import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PuntajesFinalesComponent } from './puntajesfinales.component';

describe('PuntajesfinalesComponent', () => {
  let component: PuntajesFinalesComponent;
  let fixture: ComponentFixture<PuntajesFinalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PuntajesFinalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PuntajesFinalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
