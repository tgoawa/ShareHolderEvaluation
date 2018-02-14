import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppEvaluationsRoutingModule } from './app-evaluations-routing.module';
import { AppEvaluationsComponent } from './app-evaluations.component';

@NgModule({
  imports: [
    CommonModule,
    AppEvaluationsRoutingModule
  ],
  declarations: [AppEvaluationsComponent]
})
export class AppEvaluationsModule { }
