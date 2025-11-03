import { Component, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink,RouterLinkActive,ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  login(){

  }

  registerForm: FormGroup
  loginForm: FormGroup;

  onLoginSubmit() {
    if (this.loginForm.valid) {
      console.log('Login Data:', this.loginForm.value);
      // Add your login processing logic here
    }
  }

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      Name: ['', Validators.required],
      Email: ['', [Validators.required, Validators.email]],
      Password: ['', Validators.required],
      ContactNo: ['', Validators.required],
      Role: ['', Validators.required],
    });

    this.loginForm = this.fb.group({
      ContactNo: ['', Validators.required],
      Password: ['', Validators.required],
    });
  }

  onRegister() {
    if (this.registerForm.valid) {
      console.log('Registration Data:', this.registerForm.value);
      // Add your submit logic here
    }
  }
}
