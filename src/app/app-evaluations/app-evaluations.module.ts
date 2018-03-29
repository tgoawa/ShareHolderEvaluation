import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatListModule,
  MatSelectModule,
  MatToolbarModule,
  MatMenuModule,
  MatIconModule,
  MatGridListModule,
  MatCheckboxModule,
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppEvaluationsRoutingModule } from './app-evaluations-routing.module';
import { AppEvaluationsComponent } from './app-evaluations.component';
import { EvaluationsHeaderComponent } from './evaluations-header/evaluations-header.component';
import { EvaluationsMainComponent } from './evaluations-main/evaluations-main.component';
import { MainCardComponent } from './evaluations-main/main-card/main-card.component';
import { EvaluationCardComponent } from './shared/evaluation-card/evaluation-card.component';
import { EvaluationsCompetencyComponent } from './evaluations-competency/evaluations-competency.component';
import { EvaluationsWigComponent } from './evaluations-wig/evaluations-wig.component';
import { EvaluationsLeadershipComponent } from './evaluations-leadership/evaluations-leadership.component';
import { EvaluationsEconomicComponent } from './evaluations-economic/evaluations-economic.component';
import { EvaluationLineItemComponent } from './shared/evaluation-line-item/evaluation-line-item.component';
import { EvaluationYearService } from './shared/services/evaluation-year.service';
import { EvaluationsSignOffComponent } from './evaluations-sign-off/evaluations-sign-off.component';
import { SignOffComponent } from './evaluations-sign-off/sign-off/sign-off.component';

@NgModule({
  imports: [
    CommonModule,
    AppEvaluationsRoutingModule,
    FlexLayoutModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatSelectModule,
    MatToolbarModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppEvaluationsComponent,
    EvaluationsHeaderComponent,
    EvaluationsMainComponent,
    MainCardComponent,
    EvaluationCardComponent,
    EvaluationsCompetencyComponent,
    EvaluationsWigComponent,
    EvaluationsLeadershipComponent,
    EvaluationsEconomicComponent,
    EvaluationLineItemComponent,
    EvaluationsSignOffComponent,
    SignOffComponent,
  ],
  providers: [
    EvaluationYearService
  ]
})
export class AppEvaluationsModule {}
