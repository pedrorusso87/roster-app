import { Action } from '@ngrx/store';
import { PlayerInformation } from './models/players-list.model';

export const UPDATE_PLAYERS_LIST = '[PLAYER] Update players list';

export class UpdatePlayersList implements Action {
  readonly type = UPDATE_PLAYERS_LIST;
  constructor( public payload: { completed: boolean, players: PlayerInformation }) {}
}

// action types
export type PlayersListActions = UpdatePlayersList;
