import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GoalsMainComponent } from './goals-main/goals-main.component';
import { AppGoalsComponent } from './app-goals.component';
import { GoalsCompetencyComponent } from './goals-competency/goals-competency.component';
import { GoalsWigComponent } from './goals-wig/goals-wig.component';
import { GoalsLeadershipComponent } from './goals-leadership/goals-leadership.component';
import { GoalsEconomicComponent } from './goals-economic/goals-economic.component';
import { GoalsReviewComponent } from './goals-review/goals-review.component';
import { GoalsPrintComponent } from './goals-print/goals-print.component';

const routes: Routes = [
{
  path: '',
  component: AppGoalsComponent,
  children: [
    {path: 'main', component: GoalsMainComponent},
    {path: 'competency/:id', component: GoalsCompetencyComponent},
    {path: 'wig/:id', component: GoalsWigComponent},
    {path: 'leadership/:id', component: GoalsLeadershipComponent},
    {path: 'economic', component: GoalsEconomicComponent},
    {path: 'review-meeting', component: GoalsReviewComponent},
    {path: 'print', component: GoalsPrintComponent}
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppGoalsRoutingModule { }
