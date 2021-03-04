import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { first, map } from 'rxjs/operators';
import { UserRegistration } from 'src/app/models/user';
import { from, Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as loginUserActions from '../../auth/login/store/login-actions';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user: any;

  constructor(
    public afAuth: AngularFireAuth,
  ) {}

  async login(user: UserRegistration): Promise<any> {
    try {
      await this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password).then((newUser) => {
        return newUser;
      });
    } catch (error) { return error; }
   }

  async logOut(): Promise<void> {
    try {
      await this.afAuth.auth.signOut();

    } catch (error) {
      return error;
    }
  }

  register(user: UserRegistration): Observable<any> {
    return from(this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password))
    .pipe(map(response => JSON.stringify(response)));
  }

  getCurrentUser(): Promise<any> {
    return this.afAuth.authState.pipe(first()).toPromise();
  }
}



