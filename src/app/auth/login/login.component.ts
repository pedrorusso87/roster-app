import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserRegistration } from 'src/app/models/user';
import { AuthService } from '../services/auth.service';
import * as fromLogin from '../../auth/login/store';
import { Store } from '@ngrx/store';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  constructor(
    private authService: AuthService,
    private store: Store<fromLogin.LoginState>
  ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const user = {
      email: this.getEmail(),
      password: this.getPassword()
    } as UserRegistration;
    this.store.dispatch(new fromLogin.LoginUser(user));
  }

  getEmail(): any {
    return this.loginForm.get('email')?.value;
  }

  getPassword(): any {
    return this.loginForm.get('password')?.value;
  }

}
