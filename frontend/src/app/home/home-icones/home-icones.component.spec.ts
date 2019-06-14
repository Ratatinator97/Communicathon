import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeIconesComponent } from './home-icones.component';

describe('HomeIconesComponent', () => {
  let component: HomeIconesComponent;
  let fixture: ComponentFixture<HomeIconesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeIconesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeIconesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
