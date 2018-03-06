import { NgModule } from '@angular/core';
import {
  CommonModule
} from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatDialogModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatProgressSpinnerModule,
  MatSelectModule,
  MatSnackBarModule,
  MatToolbarModule,
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { TextMaskModule } from 'angular2-text-mask';

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
import { GoalFormCardComponent } from './shared/goal-form-card/goal-form-card.component';
import { ActionsListComponent } from './shared/goal-form-card/actions-list/actions-list.component';
import { ActionItemsComponent } from './shared/goal-form-card/action-items/action-items.component';
import { CompetencyDropdownsComponent } from './shared/competency-dropdowns/competency-dropdowns.component';
import { WigDropdownsComponent } from './shared/wig-dropdowns/wig-dropdowns.component';
import { GoalsReviewComponent } from './goals-review/goals-review.component';
import { DropdownsService } from './shared/services/dropdowns.service';
import { GoalsService } from './shared/services/goals.service';
import { GoalTotalWeightComponent } from './shared/goal-total-weight/goal-total-weight.component';
import { GoalBaseComponent } from './shared/goal-base/goal-base.component';
import { NotesListComponent } from './shared/goal-form-card/notes-list/notes-list.component';
import { NoteItemsComponent } from './shared/goal-form-card/note-items/note-items.component';
import { ConfirmationDialogComponent } from './shared/confirmation-dialog/confirmation-dialog.component';
import { EconomicCardComponent } from './goals-main/economic-card/economic-card.component';

@NgModule({
  imports: [
    CommonModule,
    AppGoalsRoutingModule,
    FlexLayoutModule,
    FormsModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatSnackBarModule,
    MatToolbarModule,
    ReactiveFormsModule,
    TextMaskModule,
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
    GoalFormCardComponent,
    ActionsListComponent,
    ActionItemsComponent,
    CompetencyDropdownsComponent,
    WigDropdownsComponent,
    GoalsReviewComponent,
    GoalTotalWeightComponent,
    GoalBaseComponent,
    NotesListComponent,
    NoteItemsComponent,
    ConfirmationDialogComponent,
    EconomicCardComponent
  ],
  entryComponents: [ConfirmationDialogComponent],
  providers: [
    DropdownsService,
    GoalsService,
  ],
})
export class AppGoalsModule {}
