import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperleagueComponent } from './superleague.component';

describe('SuperleagueComponent', () => {
  let component: SuperleagueComponent;
  let fixture: ComponentFixture<SuperleagueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperleagueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperleagueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
