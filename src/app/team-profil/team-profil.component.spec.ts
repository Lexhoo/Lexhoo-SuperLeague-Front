import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamProfilComponent } from './team-profil.component';

describe('TeamProfilComponent', () => {
  let component: TeamProfilComponent;
  let fixture: ComponentFixture<TeamProfilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamProfilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
