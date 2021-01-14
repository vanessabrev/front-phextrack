import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AreatextComponent } from './areatext.component';

describe('AreatextComponent', () => {
  let component: AreatextComponent;
  let fixture: ComponentFixture<AreatextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreatextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreatextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
