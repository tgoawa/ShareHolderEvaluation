import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatListModule,
  MatToolbarModule,
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppGoalsRoutingModule } from './app-goals-routing.module';
import { AppGoalsComponent } from './app-goals.component';
import { GoalsHeaderComponent } from './goals-header/goals-header.component';
import { GoalsMainComponent } from './goals-main/goals-main.component';
import { MainCardComponent } from './goals-main/main-card/main-card.component';
import { GoalsCompetencyComponent } from './goals-competency/goals-competency.component';
import { GoalsWigComponent } from './goals-wig/goals-wig.component';
import { GoalsEconomicComponent } from './goals-economic/goals-economic.component';
import { GoalListCardComponent } from './shared/goal-list-card/goal-list-card.component';
import { GoalsLeadershipComponent } from './goals-leadership/goals-leadership.component';

@NgModule({
  imports: [
    CommonModule,
    AppGoalsRoutingModule,
    FlexLayoutModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule,
  ],
  declarations: [
    AppGoalsComponent,
    GoalsHeaderComponent,
    GoalsMainComponent,
    MainCardComponent,
    GoalsCompetencyComponent,
    GoalsWigComponent,
    GoalsEconomicComponent,
    GoalListCardComponent,
    GoalsLeadershipComponent,
  ],
})
export class AppGoalsModule {}
