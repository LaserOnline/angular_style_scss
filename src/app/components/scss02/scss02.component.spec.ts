import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Scss02Component } from './scss02.component';

describe('Scss02Component', () => {
  let component: Scss02Component;
  let fixture: ComponentFixture<Scss02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Scss02Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Scss02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
