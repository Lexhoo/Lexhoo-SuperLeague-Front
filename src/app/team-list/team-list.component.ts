import { HomeService } from '../services/home.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.scss']
})
export class TeamListComponent implements OnInit {

  teams: any;
  currentTeam = null;
  currentIndex = -1;
  city = '';

  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    this.retrieveTeams();
  }

  retrieveTeams(): void {
    this.homeService.getAll()
      .subscribe(
        data => {
          this.teams = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrieveTeams();
    this.currentTeam = null;
    this.currentIndex = -1;
  }

  setActiveTeam(team, index): void {
    this.currentTeam = team;
    this.currentIndex = index;
  }

  removeAllTeams(): void {
    this.homeService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.retrieveTeams();
        },
        error => {
          console.log(error);
        });
  }
  searchTitle(): void {
    this.homeService.findByTitle(this.city)
      .subscribe(
        data => {
          this.teams = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
  }

