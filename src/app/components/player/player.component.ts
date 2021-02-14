import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  playerName = '';
  playersLimit: any;
  limit = 0;
  players: string[] = [];
  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
  }

  onNameChanged(target: any): void {
    this.playerName = target.value;
  }

  onAddClicked(): void {
    this.players.push(this.playerName);
    /*const user = {
      username: this.playerName
    } as User;
    this.userService.addUserToFireBase(user);*/
    this.playerName = '';
  }

  updatePlayersLimit(target: any): void {
    this.limit = parseInt(target.value, 10);
  }

  onLimitClicked(): void {
    this.playersLimit = this.limit;
  }
}
