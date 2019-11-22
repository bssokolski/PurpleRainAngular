import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, FormControl} from '@angular/forms';
import {AuthService} from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private form: FormBuilder, private authService: AuthService) {
    this.createForm();
   }

  ngOnInit() {
  }

  createForm(){
    this.loginForm = this.form.group({
      email: new FormControl,
      password: new FormControl
    });
  }

  onSubmit(){
    this.authService.login(this.loginForm.value);
  }

}
