import { Injectable } from '@angular/core';
import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'firebase';
import { first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user: any;

  constructor(
    public afAuth: AngularFireAuth,
  ) {}

  async login(email: string, password: string): Promise<any> {
    try {
       this.afAuth.auth.signInWithEmailAndPassword(email, password).then((newUser) => {
        this.user = newUser;
      });

    } catch (error) {
      return error;
    }

    return this.user;
   }

  async logOut(): Promise<void> {
    try {
      await this.afAuth.auth.signOut();

    } catch (error) {
      return error;
    }
  }

  async register(email: string, password: string): Promise<firebase.auth.UserCredential> {
    try {
      return await this.afAuth.auth.createUserWithEmailAndPassword(email, password);

    } catch (error) {
      return error;
    }
  }

  getCurrentUser(): Promise<any> {
    return this.afAuth.authState.pipe(first()).toPromise();
  }

  getAccountInfo() {
    this
  }
}



