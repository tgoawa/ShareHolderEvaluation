import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppGoalsRoutingModule } from './app-goals-routing.module';
import { AppGoalsComponent } from './app-goals.component';

@NgModule({
  imports: [
    CommonModule,
    AppGoalsRoutingModule
  ],
  declarations: [AppGoalsComponent]
})
export class AppGoalsModule { }
