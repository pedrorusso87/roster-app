import { Component, Input, OnInit } from '@angular/core';
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
@Input() playersLimit: any;

  playerName = '';
  name = 'Nombre';
  completed = false;
  completedMessage = 'Convocatoria completa!';
  players: any;
  players$ = this.store.select(fromPlayers.getPlayersList);
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
    // tslint:disable-next-line: deprecation
    this.players$.subscribe(players => { if (players.length === this.playersLimit) {
      this.completed = true;
      } else {
        this.completed = false;
      }
    });
    return this.completed;
  }

  close(): void {}

}
