import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import * as CryptoJS from 'crypto-js';
import { User } from './model/user';
// import { LoggerService } from '../core/services/logger.service';
import { LoginService } from './service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loginError = false;

  constructor(private fb: FormBuilder,
    private lgService: LoginService,
    // private logger: LoggerService,
    private router: Router) { }

  ngOnInit() {
    this.loginForm = this.toFormGroup();
  }

  onSubmit(formValue: User) {
    const encUser = this.encryptUser();
    this.checkUser(encUser);
  }

  private checkUser(user: User) {
    this.lgService.isValid(user)
      .subscribe(data => {
        // this.logger.log('Login Successful!');
        this.setAuthStatus(data);
      }, error => {
        // this.logger.error(error);
      });
  }

  private encryptUser() {
    const key = CryptoJS.enc.Utf8.parse('8080808080808080');
    const iv = CryptoJS.enc.Utf8.parse('8080808080808080');
    const encryptedUser: User = {
      username: null,
      password: null
    };

    encryptedUser.username = CryptoJS.AES.encrypt(this.loginForm.get('username').value, key, { iv: iv }).toString();
    encryptedUser.password = CryptoJS.AES.encrypt(this.loginForm.get('password').value, key, { iv: iv }).toString();
    return encryptedUser;
  }

  private setAuthStatus(data: boolean) {
    if (data) {
      this.loginError = false;
      this.router.navigate(['/home']);
    } else {
      this.loginError = true;
      // this.logger.error('Login Failed!');
    }
  }

  private toFormGroup() {
    const formGroup = this.fb.group({
      username: [null, [Validators.required, Validators.minLength(4)]],
      password: [null, [Validators.required, Validators.minLength(8)]]
    });

    return formGroup;
  }
}
