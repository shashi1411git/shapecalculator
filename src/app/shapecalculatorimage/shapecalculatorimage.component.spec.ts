import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShapecalculatorimageComponent } from './shapecalculatorimage.component';

describe('ShapecalculatorimageComponent', () => {
  let component: ShapecalculatorimageComponent;
  let fixture: ComponentFixture<ShapecalculatorimageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShapecalculatorimageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShapecalculatorimageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
