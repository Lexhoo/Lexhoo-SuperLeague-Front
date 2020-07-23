import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-superleague',
  templateUrl: './superleague.component.html',
  styleUrls: ['./superleague.component.scss']
})
export class SuperleagueComponent implements OnInit {

  constructor() { }

  currentPlayer:any;

  ngOnInit(): void {
  }

}
