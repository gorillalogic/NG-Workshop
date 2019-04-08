import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoLazyLoadingComponent } from './no-lazy-loading.component';

describe('NoLazyLoadingComponent', () => {
  let component: NoLazyLoadingComponent;
  let fixture: ComponentFixture<NoLazyLoadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoLazyLoadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoLazyLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
