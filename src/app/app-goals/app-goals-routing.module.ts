import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GoalsMainComponent } from './goals-main/goals-main.component';
import { AppGoalsComponent } from './app-goals.component';
import { GoalsCompetencyComponent } from './goals-competency/goals-competency.component';
import { GoalsWigComponent } from './goals-wig/goals-wig.component';
import { GoalsLeadershipComponent } from './goals-leadership/goals-leadership.component';

const routes: Routes = [
{
  path: '',
  component: AppGoalsComponent,
  children: [
    {path: 'main', component: GoalsMainComponent},
    {path: 'competency', component: GoalsCompetencyComponent},
    {path: 'wig', component: GoalsWigComponent},
    {path: 'leadership', component: GoalsLeadershipComponent}
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppGoalsRoutingModule { }
