import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-player-container',
  templateUrl: './player-container.component.html',
  styleUrls: ['./player-container.component.scss']
})
export class PlayerContainerComponent implements OnInit {
@Input() players: any;

  constructor() { }

  ngOnInit(): void {
  }

  onButtonClicked(target: any): void {
    this.players = this.players.filter((player: string) => player !== target);
    console.log(this.players);
  }
}
