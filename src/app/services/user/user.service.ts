import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { User } from 'src/app/interfaces/user';

@Injectable()
export class UserService {

  private userList: AngularFireList<any>;

  constructor(
    private firebase: AngularFireDatabase
  ) {
    this.userList = this.firebase.list('users');
  }

  getUsersFromFirebase(): AngularFireList<any> {
    return this.userList;
  }

  addUserToFireBase(user: User): void {
    this.userList.push(user);
  }
}
