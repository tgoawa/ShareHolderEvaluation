import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatButtonModule,
  MatToolbarModule,
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppEvaluationsRoutingModule } from './app-evaluations-routing.module';
import { AppEvaluationsComponent } from './app-evaluations.component';
import { EvaluationsHeaderComponent } from './evaluations-header/evaluations-header.component';

@NgModule({
  imports: [
    CommonModule,
    AppEvaluationsRoutingModule,
    FlexLayoutModule,
    MatButtonModule,
    MatToolbarModule,
  ],
  declarations: [AppEvaluationsComponent, EvaluationsHeaderComponent]
})
export class AppEvaluationsModule { }
