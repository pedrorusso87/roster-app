export interface PlayerListState {
  players: PlayerInformation []
  completed: boolean;
}

export interface PlayerInformation {
  id: number,
  name?: string,
  email?: string
}
