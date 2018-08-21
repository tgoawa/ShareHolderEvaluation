import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  MatListModule,
  MatSelectModule,
  MatToolbarModule,
  MatMenuModule,
  MatIconModule,
  MatGridListModule,
  MatCheckboxModule,
  MatProgressSpinnerModule,
  MatSnackBarModule,
  MatTooltipModule,
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
import { EvaluationsSignOffComponent } from './evaluations-sign-off/evaluations-sign-off.component';
import { SignOffComponent } from './evaluations-sign-off/sign-off/sign-off.component';
import { EvaluationService } from './shared/services/evaluation.service';
import { ReadOnlyDashboardComponent } from './evaluations-main/read-only-dashboard/read-only-dashboard.component';
import { DashboardComponent } from './evaluations-main/dashboard/dashboard.component';
import { ReadOnlyEvaluationCardComponent } from './shared/read-only-evaluation-card/read-only-evaluation-card.component';
import { ReadOnlyEvaluationLineItemComponent } from './shared/read-only-evaluation-line-item/read-only-evaluation-line-item.component';
import { GoalDescriptionDialogComponent } from './shared/goal-description-dialog/goal-description-dialog.component';
import { EvaluationsPrintComponent } from './evaluations-print/evaluations-print.component';
import { EvaluationPrintSummaryComponent } from './evaluations-print/evaluation-print-summary/evaluation-print-summary.component';
import { EvaluationPrintGoalTypeComponent } from './evaluations-print/evaluation-print-goal-type/evaluation-print-goal-type.component';
import { EvaluationPrintGoalComponent } from './evaluations-print/evaluation-print-goal-type/evaluation-print-goal/evaluation-print-goal.component';
import { EvaluationsPrintEconomicComponent } from './evaluations-print/evaluations-print-economic/evaluations-print-economic.component';

@NgModule({
  imports: [
    CommonModule,
    AppEvaluationsRoutingModule,
    FlexLayoutModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatDialogModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatSelectModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatTooltipModule,
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
    ReadOnlyDashboardComponent,
    DashboardComponent,
    ReadOnlyEvaluationCardComponent,
    ReadOnlyEvaluationLineItemComponent,
    GoalDescriptionDialogComponent,
    EvaluationsPrintComponent,
    EvaluationPrintSummaryComponent,
    EvaluationPrintGoalTypeComponent,
    EvaluationsPrintComponent,
    EvaluationPrintGoalComponent,
    EvaluationsPrintEconomicComponent
  ],
  providers: [
    EvaluationService
  ],
  entryComponents: [
    GoalDescriptionDialogComponent
  ]
})
export class AppEvaluationsModule {}
