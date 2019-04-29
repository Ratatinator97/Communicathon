import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Choix2Component } from './choix2.component';

describe('Choix2Component', () => {
  let component: Choix2Component;
  let fixture: ComponentFixture<Choix2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Choix2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Choix2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
