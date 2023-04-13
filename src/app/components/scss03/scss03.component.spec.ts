import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Scss03Component } from './scss03.component';

describe('Scss03Component', () => {
  let component: Scss03Component;
  let fixture: ComponentFixture<Scss03Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Scss03Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Scss03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
