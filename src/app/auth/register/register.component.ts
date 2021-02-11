import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, Form } from '@angular/forms';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });
  user: any;
  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.authService.register(this.getEmail(), this.getPassword()).then((newUser) => {
      this.user = newUser;
    });
    //get the newly created user
    console.log(this.user);
  }

  getEmail(): any {
    return this.registerForm.get('email')?.value;
  }

  getPassword(): any {
    return this.registerForm.get('password')?.value;
  }
}
