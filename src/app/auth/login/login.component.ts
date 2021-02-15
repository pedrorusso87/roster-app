import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { NgxSpinnerService } from 'ngx-spinner';
import { combineLatest, from, Subject } from 'rxjs';
import { UserRegistration } from 'src/app/models/user';
import * as fromLogin from '../login/store';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  loginUserPending$ = this.store.select(fromLogin.getLoggedUserPending);
  currentUserPending$ = this.store.select(fromLogin.getCurrentUserPending);
  private unsubscribe$ = new Subject<void>();

  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  constructor(
    private store: Store,
    private spinner: NgxSpinnerService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const user = {
      email: this.getEmail(),
      password: this.getPassword()
    } as UserRegistration;
    this.store.dispatch(new fromLogin.LoginUser(user));
    this.spinner.show();
    this.listenForLogin();
  }

  listenForLogin(): void {
    combineLatest([this.loginUserPending$, this.currentUserPending$]).subscribe(([loginPending, currentUserPending]) => {
      if (!loginPending && !currentUserPending) {
        this.spinner.hide();
        this.router.navigateByUrl('/humanos');
      }
    })
  }

  getEmail(): any {
    return this.loginForm.get('email')?.value;
  }

  getPassword(): any {
    return this.loginForm.get('password')?.value;
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
