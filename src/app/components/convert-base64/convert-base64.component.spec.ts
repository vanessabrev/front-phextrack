import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvertBase64Component } from './convert-base64.component';

describe('ConvertBase64Component', () => {
  let component: ConvertBase64Component;
  let fixture: ComponentFixture<ConvertBase64Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConvertBase64Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConvertBase64Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
