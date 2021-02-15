import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRegister from '../../auth/register/store';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {

  registeredUser$ = this.store.select(fromRegister.getRegisteredUser);
  registeredUser: any;
  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
    this.registeredUser$.subscribe((registeredUser) => {
      this.registeredUser = registeredUser;
      console.log(this.registeredUser);
    });
  }

  ngOnDestroy(): void {

  }

}

