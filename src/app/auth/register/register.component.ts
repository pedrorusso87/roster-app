import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { NgxSpinnerService } from 'ngx-spinner';
import { combineLatest, Subject } from 'rxjs';
import * as fromRegister from '../register/store';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit, OnDestroy {
  registeredUser$ = this.store.select(fromRegister.getRegisteredUser);
  registeredUserPending$ = this.store.select(fromRegister.getRegisteredUserPending);
  private unsubscribe$ = new Subject<void>();

  registerForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });
  user: any;
  constructor(
    private store: Store<fromRegister.RegisterState>,
    private spinner: NgxSpinnerService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.store.dispatch(new fromRegister.RegisterUser({
      email: this.getEmail(),
      password: this.getPassword()
    }));
    this.spinner.show();
    this.listenForRegister();
  }

  listenForRegister(): void {
    combineLatest([this.registeredUserPending$, this.registeredUser$]).subscribe(
      ([pending, user]) => {
        if (!pending && user) {
          this.spinner.hide();
          this.router.navigateByUrl('/humanos');
        }
      });
  }

  getEmail(): any {
    return this.registerForm.get('email')?.value;
  }

  getPassword(): any {
    return this.registerForm.get('password')?.value;
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
