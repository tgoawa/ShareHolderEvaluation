import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EvaluationService } from '../shared/services/evaluation.service';
import { EvaluationModel } from '../shared/models/Evaluation';
import { LoginService } from '../../core/services/login.service';
import { MatSnackBar } from '@angular/material';

import * as CryptoJS from 'crypto-js';
import { User } from '../../login/model/user';
@Component({
  selector: 'app-evaluations-sign-off',
  templateUrl: './evaluations-sign-off.component.html',
  styleUrls: ['./evaluations-sign-off.component.css']
})
export class EvaluationsSignOffComponent implements OnInit {
  evaluationData: EvaluationModel;
  shareholderSignOff: FormGroup;
  picSignOff: FormGroup;
  consensusSignOff: FormGroup;

  constructor(private fb: FormBuilder,
    private evaluationService: EvaluationService,
    private loginService: LoginService,
    public snackBar: MatSnackBar ) { }

  ngOnInit() {
    this.evaluationService.evaluationModel$.subscribe(data => {
      if (data) {
        this.evaluationData = data;
        this.createShareholderForm(this.evaluationData);
        this.picSignOff = this.toFormGroup();
        this.consensusSignOff = this.toFormGroup();
      }
    });
  }

  createShareholderForm(evaluationData: EvaluationModel) {
    this.shareholderSignOff = this.fb.group({
      shareholderCheckBox: [evaluationData.IsShareholderSignOff, Validators.required]
    });
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  onConsensusSignOff() {
    //
  }

  onPicSignOff(form: FormGroup) {
    const encUser = this.encryptUser(form);
    this.loginService.isValid(encUser)
      .subscribe(data => {
        if (data) {
          this.updatePICSignOff();
        }
      }, error => {
        console.error(error);
      });
  }

  onShareholderSignOff() {
    this.evaluationService.updateShareholderSignOff(this.evaluationData)
    .subscribe(data => {
      if (data) {
        console.log('Shareholder sign off success!');
      }
    }, error => {
      console.error(error);
    });
  }

  private checkUser(user: User) {
    this.loginService.isValid(user)
      .subscribe(data => {
        if (data) {
          return data;
        }
      }, error => {
        console.error(error);
      });
  }

  private encryptUser(form: FormGroup) {
    const key = CryptoJS.enc.Utf8.parse('8080808080808080');
    const iv = CryptoJS.enc.Utf8.parse('8080808080808080');
    const encryptedUser: User = {
      username: null,
      password: null
    };

    encryptedUser.username = CryptoJS.AES.encrypt(form.get('username').value, key, { iv: iv }).toString();
    encryptedUser.password = CryptoJS.AES.encrypt(form.get('password').value, key, { iv: iv }).toString();
    return encryptedUser;
  }

  private updatePICSignOff() {
    this.evaluationService.updatePicSignOff(this.evaluationData)
      .subscribe(data => {
        if (data) {
          this.openSnackBar('PIC signed Off!', '');
          this.evaluationData.IsPICSignOff = true;
        }
      }, error => {
        this.openSnackBar('Error attempting to complete pic sign off', '');
        console.error(error);
      });
  }

  private toFormGroup() {
    const formGroup = this.fb.group({
      username: [null, [Validators.required, Validators.minLength(4)]],
      password: [null, [Validators.required, Validators.minLength(8)]]
    });

    return formGroup;
  }

}
