import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

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
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.authService.login(this.getEmail(), this.getPassword());
  }

  getEmail(): any {
    return this.loginForm.get('email')?.value;
  }

  getPassword(): any {
    return this.loginForm.get('password')?.value;
  }

}
