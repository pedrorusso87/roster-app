import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as fromRegister from '../register/store';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registeredUser$ = this.store.select(fromRegister.getRegisteredUser);
  registerForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });
  user: any;
  constructor(
    private store: Store<fromRegister.RegisterState>
  ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.store.dispatch(new fromRegister.RegisterUser({
      email: this.getEmail(),
      password: this.getPassword()
    }));
  }

  getEmail(): any {
    return this.registerForm.get('email')?.value;
  }

  getPassword(): any {
    return this.registerForm.get('password')?.value;
  }
}
