import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

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

@NgModule({
  imports: [
    CommonModule,
    AppEvaluationsRoutingModule,
    FlexLayoutModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatSelectModule,
    MatToolbarModule,
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
  ],
  providers: [
    EvaluationYearService
  ]
})
export class AppEvaluationsModule {}
