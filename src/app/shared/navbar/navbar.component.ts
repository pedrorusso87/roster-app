import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRegister from '../../auth/register/store';
import * as fromLogin from '../../auth/login/store';
import { combineLatest, Subject } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {

  registeredUser$ = this.store.select(fromRegister.getRegisteredUser);
  loggedUser$ = this.store.select(fromLogin.getCurrentUser);
  private unsubscribe$ = new Subject<void>();

  showOptions = false;
  registeredUser: any;
  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
    combineLatest([this.registeredUser$, this.loggedUser$]).subscribe(([registeredUser, loggedUser]) => {
      if (registeredUser || loggedUser) {
        this.showOptions = true;
      }
    });
  }

  ngOnDestroy(): void {
  this.unsubscribe$.next();
  this.unsubscribe$.complete();
  }

}

