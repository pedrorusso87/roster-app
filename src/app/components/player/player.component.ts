import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  playerName = '';
  playersLimit: any;
  limit = 0;
  players: string[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  onNameChanged(target: any): void {
    this.playerName = target.value;
  }

  onAddClicked(): void {
    this.players.push(this.playerName);
    this.playerName = '';
  }

  updatePlayersLimit(target: any): void {
    this.limit = parseInt(target.value, 10);
  }

  onLimitClicked(): void {
    this.playersLimit = this.limit;
  }
}
