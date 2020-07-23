import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PlayerService } from '../services/player.service';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.scss']
})
export class PlayerListComponent implements OnInit {

players: any[];
currentPlayer = null;
currentIndex = -1;
lastname = '';
submitted = false;

  constructor(private playerService: PlayerService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.retrivePlayers();
  }

  addPlayer() {
    this.router.navigate(['newplayer'])
  }

  retrivePlayers(): void {
this.playerService.getAllPlayers().subscribe({
  next: (playerfromServer) => {
    this.players = playerfromServer;
  },
  error: (err) => {
    console.log('error player' ,err );
  }
});
  }

  refreshList(): void {
    this.retrivePlayers();
    this.currentPlayer = null;
    this.currentIndex = -1;
  }

  setActiveTeam(player, index): void {
    this.currentPlayer = player;
    this.currentIndex = index;
  }

  removePlayer(id): void {
    this.playerService.deletePlayers(id)
      .subscribe(
        response => {
          console.log(response);
          this.retrivePlayers();
        },
        error => {
          console.log(error);
        });
  }

  saveTutorial() {
    const data = {
      firstname: this.currentPlayer.firstname,
      lastname: this.currentPlayer.lastname
    };

  this.playerService.create(data)
  .subscribe(
    response => {
      console.log(response);
      this.submitted = true;
    },
    error => {
      console.log(error);
    });
}
newTutorial() {
  this.submitted = false;
  this.currentPlayer = {
    firstname: '',
    lastname: '',
    age: '',
    nationality: '',
    height: '',
    weight: '',
    post: '',
    salary: '',
    videolink: ''

  };
}



}
