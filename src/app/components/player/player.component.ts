import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  playerName = '';
  players: string[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  onKeyUp(target: any): void {
    this.playerName = target.value;
  }

  onButtonClicked(): void {
    this.players.push(this.playerName);
    this.playerName = '';
    console.log(this.players)
  }
}
