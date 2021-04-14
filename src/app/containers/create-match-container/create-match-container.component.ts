import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromPlayers from '../../components/player/store';

@Component({
  selector: 'app-create-match-container',
  templateUrl: './create-match-container.component.html',
  styleUrls: ['./create-match-container.component.scss']
})
export class CreateMatchContainerComponent implements OnInit {

  players$ = this.store.select(fromPlayers.getPlayersList);
  playersLimit: any;
  
  constructor(private store: Store) { }

  ngOnInit(): void {
  }

  handlePlayerLimitChanged(limit: number): void {
    this.playersLimit = limit;
  }

}
