import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { NgxSpinnerService } from 'ngx-spinner';
import { combineLatest, Subject } from 'rxjs';
import { UserRegistration } from 'src/app/models/user';
import * as fromLogin from '../login/store';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  loginUserPending$ = this.store.select(fromLogin.getLoggedUserPending);
  loginUserError$ = this.store.select(fromLogin.getLoggedUserError);
  currentUserPending$ = this.store.select(fromLogin.getCurrentUserPending);
  private unsubscribe$ = new Subject<void>();
  errors = false;
  errorMessage = null;
  loginForm: FormGroup;

  constructor(
    private store: Store,
    private spinner: NgxSpinnerService,
    private router: Router,
    private fb: FormBuilder
    ) {
      this.loginForm = this.fb.group({
        email: new FormControl('', Validators.required),
        password: new FormControl('', Validators.required)
      });
    }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.validateForm();
  }

  validateForm(): void {
    if (this.loginForm.valid) {
      this.errors = false;
      this.spinner.show();
      const user = {
        email: this.getEmail(),
        password: this.getPassword()
      } as UserRegistration;
      this.store.dispatch(new fromLogin.LoginUser(user));
      this.listenForLogin();
    } else {
      this.errors = true;
    }
  }

  listenForLogin(): void {
    combineLatest([this.loginUserPending$, this.currentUserPending$])
    .subscribe(([loginPending, currentUserPending]) => {
      if (!loginPending && !currentUserPending) {
        this.loginUserError$.pipe().subscribe(error => {
          if (!error) {
            this.spinner.hide();
            this.router.navigateByUrl('/dashboard');
          } else {
            this.spinner.hide();
            this.errorMessage = error.message;
          }
        });
      }
    });
  }

  getEmail(): any {
    return this.loginForm.get('email')?.value;
  }

  getPassword(): any {
    return this.loginForm.get('password')?.value;
  }

  close(): void {
    this.errorMessage = null;
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
