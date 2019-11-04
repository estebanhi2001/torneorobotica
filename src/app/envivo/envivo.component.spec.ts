import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvivoComponent } from './envivo.component';

describe('EnvivoComponent', () => {
  let component: EnvivoComponent;
  let fixture: ComponentFixture<EnvivoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnvivoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
