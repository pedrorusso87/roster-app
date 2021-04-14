import { Component, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromPlayersActions from '../../components/player/store/player-actions';

@Component({
  selector: 'app-player-container',
  templateUrl: './player-container.component.html',
  styleUrls: ['./player-container.component.scss']
})
export class PlayerContainerComponent implements OnInit {
@Input() players: any;
@Input() playersLimit: any;

  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {}

  onDeletePlayerClicked(target: any): void {
    this.players = this.players.filter((player: string) => player !== target);
    this.store.dispatch(new fromPlayersActions.DeletePlayer({ players: this.players.length > 0 ? this.players : [] }));
  }

  close(): void { }
}
