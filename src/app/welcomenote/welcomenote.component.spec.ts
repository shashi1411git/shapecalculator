import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomenoteComponent } from './welcomenote.component';

describe('WelcomenoteComponent', () => {
  let component: WelcomenoteComponent;
  let fixture: ComponentFixture<WelcomenoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WelcomenoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomenoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
