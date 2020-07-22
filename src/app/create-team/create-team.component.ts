import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { HomeService } from '../services/home.service';

@Component({
  selector: 'app-create-team',
  templateUrl: './create-team.component.html',
  styleUrls: ['./create-team.component.scss']
})
export class CreateTeamComponent implements OnInit {

  team = {
    city: '',
    name: '',
    stadium: '',
    created: ''
  };
  submitted = false;

  teams: []
  content: string;

  constructor(private userService: UserService, private homeService: HomeService) { }

  ngOnInit(): void {
  }

  saveTeam(): void {
    const data = {
      city: this.team.city,
      name: this.team.name,
      stadium: this.team.stadium,
      created: this.team.created
    };

    this.homeService.create(data)
    .subscribe(
      response => {
        console.log(response);
        this.submitted = true;
      },
      error => {
        console.log(error);
      });
    }

    newTeam(): void {
      this.submitted = false;
      this.team = {
        city: '',
        name: '',
        stadium: '',
        created: ''
      };
    }

}
