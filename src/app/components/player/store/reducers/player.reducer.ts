import * as fromPlayer from '../player-actions';
import { PlayerListState } from '../models/players-list.model';

export const initialState: PlayerListState = {
  players: [],
  completed: false
};

export function reducer(state = initialState, action: fromPlayer.PlayersListActions): PlayerListState {
  switch (action.type) {
    case fromPlayer.UPDATE_PLAYERS_LIST: {
      return {
        ...state,
        players: [...state.players, action.payload.players ]
      };
    }
    case fromPlayer.DELETE_PLAYER: {
      return {
        ...state,
        players: action.payload.players
      };
    }
    default: {
      return { ...state };
    }
  }
}

export const getPlayersList = (state: PlayerListState) => state.players

