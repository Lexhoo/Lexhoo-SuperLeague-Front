import { TestBed } from '@angular/core/testing';

import { TeamProfilService } from './team-profil.service';

describe('TeamProfilService', () => {
  let service: TeamProfilService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeamProfilService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
