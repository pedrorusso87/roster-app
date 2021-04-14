import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-players-limit',
  templateUrl: './players-limit.component.html',
  styleUrls: ['./players-limit.component.scss']
})
export class PlayersLimitComponent implements OnInit {
  @Output() playerLimitChanged = new EventEmitter();
  limit = 0;
  amount = 'Cantidad de jugadores';
  playersLimit: any;
  constructor() { }

  ngOnInit(): void {}

  updatePlayersLimit(target: any): void {
    this.limit = parseInt(target.value, 10);
  }

  onLimitClicked(): void {
    this.playersLimit = this.limit;
    this.playerLimitChanged.emit(this.playersLimit);
  }
}
