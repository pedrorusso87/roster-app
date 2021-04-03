import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import { PlayerListState } from '../models/players-list.model';
import { PlayersListActions } from '../player-actions';
import * as fromPlayers from './player.reducer'

export interface PlayersState {
  playersList: PlayerListState;
}

export const reducers: ActionReducerMap<PlayersState, PlayersListActions> = {
  playersList: fromPlayers.reducer,
 };

const playersListState = createFeatureSelector<PlayersState>('playersList');

export const getPlayersListState = createSelector(playersListState, (state: PlayersState) => state.playersList);
export const getPlayersList = createSelector(getPlayersListState, fromPlayers.getPlayersList)
