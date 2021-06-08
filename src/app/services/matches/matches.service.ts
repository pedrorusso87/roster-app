import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable()
export class MatchesService {

  //private matchesList: AngularFireList<any>;

  constructor(
    private firebase: AngularFireDatabase,
    private databse: AngularFirestore
  ) {
    
  }

  getMatches(): any {
    return this.firebase.list('matches').valueChanges();
  }

  addMatch(): void {
    this.firebase.list('matches').push({
      date: 'date',
      players: [{
        username: 'coso'
      },
    {
      username: 'coso2'
    }],
    rosterCompleted: false,
    venue: 'venuee'
    });
  }
}
