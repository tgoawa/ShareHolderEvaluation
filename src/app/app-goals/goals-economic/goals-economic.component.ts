import { Component, OnInit } from '@angular/core';
import { EconomicGoal } from '../models/economic-goal';

import createNumberMask from 'text-mask-addons/dist/createNumberMask';
import { FormGroup, FormBuilder } from '@angular/forms';

const numberMask = createNumberMask({
  prefix: '$'
});

@Component({
  selector: 'app-goals-economic',
  templateUrl: './goals-economic.component.html',
  styleUrls: ['./goals-economic.component.css']
})
export class GoalsEconomicComponent implements OnInit {
  mask = numberMask;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  private toFormGroup(data: EconomicGoal): FormGroup {
    const formGroup = this.fb.group({

    });

    return formGroup;
  }

}
