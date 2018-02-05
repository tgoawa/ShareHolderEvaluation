import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule, MatToolbarModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppGoalsRoutingModule } from './app-goals-routing.module';
import { AppGoalsComponent } from './app-goals.component';
import { GoalsHeaderComponent } from './goals-header/goals-header.component';
import { GoalsMainComponent } from './goals-main/goals-main.component';

@NgModule({
  imports: [
    CommonModule,
    AppGoalsRoutingModule,
    FlexLayoutModule,
    MatButtonModule,
    MatToolbarModule
  ],
  declarations: [AppGoalsComponent, GoalsHeaderComponent, GoalsMainComponent]
})
export class AppGoalsModule { }
