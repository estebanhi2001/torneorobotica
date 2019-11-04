import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipodetalleComponent } from './equipodetalle.component';

describe('EquipodetalleComponent', () => {
  let component: EquipodetalleComponent;
  let fixture: ComponentFixture<EquipodetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquipodetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipodetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
