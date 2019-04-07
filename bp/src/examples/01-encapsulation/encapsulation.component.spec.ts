import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EncapsulationComponent } from './encapsulation.component';

describe('EncapsulationComponent', () => {
  let component: EncapsulationComponent;
  let fixture: ComponentFixture<EncapsulationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EncapsulationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EncapsulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
