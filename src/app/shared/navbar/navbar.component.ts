import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRegister from '../../auth/register/store';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  registeredUser$ = this.store.select(fromRegister.getRegisteredUser);

  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
  }

}
