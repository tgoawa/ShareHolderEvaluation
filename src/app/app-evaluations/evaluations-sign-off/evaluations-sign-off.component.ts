import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EvaluationService } from '../shared/services/evaluation.service';
import { EvaluationModel } from '../shared/models/Evaluation';

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

  constructor(private fb: FormBuilder, private evaluationService: EvaluationService) { }

  ngOnInit() {
    this.evaluationService.evaluationModel$.subscribe(data => {
      if (data) {
        this.evaluationData = data;
        this.createShareholderForm(this.evaluationData);
      }
    });
  }

  createShareholderForm(evaluationData: EvaluationModel) {
    this.shareholderSignOff = this.fb.group({
      shareholderCheckBox: [evaluationData.IsShareholderSignOff, Validators.required]
    });
  }

  private toFormGroup() {
    const formGroup = this.fb.group({
      username: [null, [Validators.required, Validators.minLength(4)]],
      password: [null, [Validators.required, Validators.minLength(8)]]
    });

    return formGroup;
  }

  onConsensusSignOff() {
    //
  }

  onPicSignOff() {
    //
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

}
