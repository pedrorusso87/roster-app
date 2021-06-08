import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { User } from 'src/app/models/user';

@Injectable()
export class UserService {

  private userList: any;
  private user: any;

  constructor(
    private firebase: AngularFireDatabase
  ) {
    this.user = this.firebase.list('users');
  }
  
  getUsersFromFirebase(): any {
    this.userList = this.firebase.list('users').valueChanges();
    return this.userList;
  }

  addUserToFireBase(user: User): void {
    this.user.push(user);
  }
}
