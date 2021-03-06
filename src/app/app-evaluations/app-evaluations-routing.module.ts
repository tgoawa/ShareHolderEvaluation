import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppEvaluationsComponent } from './app-evaluations.component';
import { EvaluationsMainComponent } from './evaluations-main/evaluations-main.component';
import { EvaluationsCompetencyComponent } from './evaluations-competency/evaluations-competency.component';
import { EvaluationsWigComponent } from './evaluations-wig/evaluations-wig.component';
import { EvaluationsLeadershipComponent } from './evaluations-leadership/evaluations-leadership.component';
import { EvaluationsEconomicComponent } from './evaluations-economic/evaluations-economic.component';
import { EvaluationsSignOffComponent } from './evaluations-sign-off/evaluations-sign-off.component';
import { EvaluationsPrintComponent } from './evaluations-print/evaluations-print.component';

const routes: Routes = [
  {
    path: '',
    component: AppEvaluationsComponent,
    children: [
      {path: 'main', component: EvaluationsMainComponent},
      {path: 'competency', component: EvaluationsCompetencyComponent},
      {path: 'wig', component: EvaluationsWigComponent},
      {path: 'leadership', component: EvaluationsLeadershipComponent},
      {path: 'economic', component: EvaluationsEconomicComponent},
      {path: 'sign-off', component: EvaluationsSignOffComponent},
      {path: 'print', component: EvaluationsPrintComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppEvaluationsRoutingModule { }
