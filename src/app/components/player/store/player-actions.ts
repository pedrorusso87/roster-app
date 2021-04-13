import { Action } from '@ngrx/store';
import { PlayerInformation } from './models/players-list.model';

export const UPDATE_PLAYERS_LIST = '[Player Action] Update players list';
export const DELETE_PLAYER = '[Player Action] Delete player';

export class UpdatePlayersList implements Action {
  readonly type = UPDATE_PLAYERS_LIST;
  constructor( public payload: { completed: boolean, players: PlayerInformation }) {}
}

export class DeletePlayer implements Action {
  readonly type = DELETE_PLAYER;
  constructor( public payload: { players: PlayerInformation [] }) {}
}

// action types
export type PlayersListActions = UpdatePlayersList | DeletePlayer;
