import { Component, OnInit, OnChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EvaluationService } from '../shared/services/evaluation.service';
import { EvaluationModel } from '../shared/models/Evaluation';
import { LoginService } from '../../core/services/login.service';
import { MatSnackBar } from '@angular/material';

import * as CryptoJS from 'crypto-js';
import { User } from '../../login/model/user';
import { TeamMember } from '../../core/model/team-member';
import { TeamMemberService } from '../../core/services/team-member.service';
import { YearSelectionService } from '../../core/services/year-selection.service';

@Component({
  selector: 'app-evaluations-sign-off',
  templateUrl: './evaluations-sign-off.component.html',
  styleUrls: ['./evaluations-sign-off.component.css']
})
export class EvaluationsSignOffComponent implements OnInit, OnChanges {
  evaluationData: EvaluationModel;
  shareholderSignOff: FormGroup;
  picSignOffForm: FormGroup;
  consensusSignOffForm: FormGroup;
  canConsensusSignOff: boolean;
  canShareholderSignOff: boolean;
  teamMember: TeamMember;
  year: number;

  constructor(private fb: FormBuilder,
    private evaluationService: EvaluationService,
    private loginService: LoginService,
    private teamMemberService: TeamMemberService,
    private yearService: YearSelectionService,
    public snackBar: MatSnackBar ) { }

  ngOnInit() {
    this.evaluationService.evaluationModel$.subscribe(data => {
      if (data) {
        this.evaluationData = data;
        this.createShareholderForm();
        this.picSignOffForm = this.toFormGroup();
        this.consensusSignOffForm = this.toFormGroup();
      }
    });
    this.canShareholderSignOff = this.isReadyForShareholderSignOff();
    this.canConsensusSignOff = this.isReadyForConsensusSignOff();
  }

  ngOnChanges() {
    this.canShareholderSignOff = this.isReadyForShareholderSignOff();
    this.canConsensusSignOff = this.isReadyForConsensusSignOff();
  }

  createShareholderForm() {
    this.shareholderSignOff = this.fb.group({
      shareholderCheckBox: ['', Validators.required]
    });
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  onConsensusSignOff(form: FormGroup) {
    const userName = form.get('username').value;
    this.teamMemberService.teamMember$.subscribe(teamMemberObject => {
      this.teamMember = teamMemberObject;
      this.evaluationService.evaluationModel$.subscribe(evalModel => {
        const evalModelData = evalModel;
        if ((this.teamMember.UserName !== userName) && (evalModelData.PICNetworkName !== userName)) {
          this.consensusSignOff(form);
        } else {
          this.openSnackBar('Team member has already acted as a signoff on this evaluation', '');
        }
      });
    }, error => {
      console.error(error);
    });
  }

  onPicSignOff(form: FormGroup) {
    this.teamMemberService.teamMember$.subscribe(teamMemberObject => {
      this.teamMember = teamMemberObject;
      if (this.teamMember.UserName !== form.get('username').value) {
        this.picSignOff(form);
      } else {
        this.openSnackBar('Shareholder cannot sign off as PIC', '');
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
        this.evaluationData.IsShareholderSignOff = true;
        this.getEvaluationData();
      }
    }, error => {
      console.error(error);
    });
  }

  private getEvaluationData() {
    this.teamMemberService.teamMember$
      .subscribe(teamMemberObject => {
        this.teamMember = teamMemberObject;
        this.yearService.selectedEvalYear$.subscribe(data => {
          this.year = data;
          this.evaluationService.getEvaluationModel(this.teamMember.TeamMemberId, this.year);
        }, error => {
          console.error(error);
        });
      }, error => {
        console.error('Could not retrieve team member data!');
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

  private picSignOff(form: FormGroup) {
    const encUser = this.encryptUser(form);
    this.loginService.isValid(encUser)
      .subscribe(data => {
        if (data) {
          this.evaluationData.PICNetworkName = this.picSignOffForm.get('username').value;
          this.updatePICSignOff();
        }
      }, error => {
        console.error(error);
      });
  }

  private consensusSignOff(form) {
    const encUser = this.encryptUser(form);
    this.loginService.isValid(encUser)
      .subscribe(data => {
        if (data) {
          this.evaluationData.ConsensusNetworkName = this.consensusSignOffForm.get('username').value;
          this.updateConsensusignOff();
        }
      }, error => {
        console.error(error);
      });
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

  private updateConsensusignOff() {
    this.evaluationService.updateConsensusSignOff(this.evaluationData)
      .subscribe(data => {
        if (data) {
          this.openSnackBar('Consensus signed Off!', '');
          this.evaluationData.IsConsensusSignOff = true;
        }
      }, error => {
        this.openSnackBar('Error attempting to complete Consensus sign off', '');
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

  private isReadyForShareholderSignOff(): boolean {
    if (!this.isScoreSet() && !this.isPowerLevelSet()) {
      return false;
    } else {
      return true;
    }
  }

  private isReadyForConsensusSignOff(): boolean {
    if (!this.isScoreSet() && !this.isPowerLevelSet() && !this.isPicSignedOff()) {
      return false;
    } else {
      return true;
    }
  }

  private isScoreSet(): boolean {
    if (this.evaluationData.EvaluationScore > 0) {
      return true;
    } else {
      return false;
    }
  }

  private isPowerLevelSet(): boolean {
    if (this.evaluationData.PowerLevelId > 0) {
      return true;
    } else {
      return false;
    }
  }

  private isPicSignedOff(): boolean {
    if (this.evaluationData.IsPICSignOff) {
      return true;
    } else {
      return false;
    }
  }

  private isShareholderSignedOff(): boolean {
    if (this.evaluationData.IsShareholderSignOff) {
      return true;
    } else {
      return false;
    }
  }

}
