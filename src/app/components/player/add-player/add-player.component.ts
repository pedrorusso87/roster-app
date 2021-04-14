import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromPlayersListActions from '../store/player-actions';
import * as fromPlayers from '../store';
import * as fromAuth from '../../../auth/login/store';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.scss']
})
export class AddPlayerComponent implements OnInit {

  playerName = '';
  playersLimit: any;
  completed = false;
  completedMessage = 'Convocatoria completa!';
  limit = 0;
  players: any;
  players$ = this.store.select(fromPlayers.getPlayersList);
  user$ = this.store.select(fromAuth.getCurrentUser);
  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
  }

  onNameChanged(target: any): void {
    this.playerName = target.value;
  }

  onAddClicked(): void {
    if (!this.rosterCompleted()) {
      this.store.dispatch(new fromPlayersListActions.UpdatePlayersList({
        completed: false,
        players: {
          id: 1,
          name: this.playerName,
          email: 'testmail'
        }}
      ));
      this.playerName = '';
    }
  }

  rosterCompleted(): boolean {
    this.players$.subscribe(players => { if (players.length === this.playersLimit) {
      this.completed = true;
      } else {
        this.completed = false;
      }
    });
    return this.completed;
  }


  updatePlayersLimit(target: any): void {
    this.limit = parseInt(target.value, 10);
  }

  onLimitClicked(): void {
    this.playersLimit = this.limit;
  }
  close(): void {}

}
