import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticalbannerComponent } from './verticalbanner.component';

describe('VerticalbannerComponent', () => {
  let component: VerticalbannerComponent;
  let fixture: ComponentFixture<VerticalbannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerticalbannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerticalbannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
