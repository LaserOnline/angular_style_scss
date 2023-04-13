import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Scss01Component } from './scss01.component';

describe('Scss01Component', () => {
  let component: Scss01Component;
  let fixture: ComponentFixture<Scss01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Scss01Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Scss01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
