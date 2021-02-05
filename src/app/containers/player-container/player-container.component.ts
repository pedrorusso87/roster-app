import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-player-container',
  templateUrl: './player-container.component.html',
  styleUrls: ['./player-container.component.scss']
})
export class PlayerContainerComponent implements OnInit {
@Input() players: any;
@Input() playersLimit: any;

  constructor() { }

  ngOnInit(): void {
    if (!this.playersLimit) {
      /*TODO: Review this functionallity. Currently is bugging the hell out of the app.
      this.clearPlayers();*/
    }
  }

  onButtonClicked(target: any): void {
    this.players = this.players.filter((player: string) => player !== target);
  }

  clearPlayers(): void {
    this.players = [];
  }
}
