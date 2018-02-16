import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppEvaluationsComponent } from './app-evaluations.component';
import { EvaluationsMainComponent } from './evaluations-main/evaluations-main.component';
import { EvaluationsCompetencyComponent } from './evaluations-competency/evaluations-competency.component';
import { EvaluationsWigComponent } from './evaluations-wig/evaluations-wig.component';

const routes: Routes = [
  {
    path: '',
    component: AppEvaluationsComponent,
    children: [
      {path: 'main', component: EvaluationsMainComponent},
      {path: 'competency', component: EvaluationsCompetencyComponent},
      {path: 'wig', component: EvaluationsWigComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppEvaluationsRoutingModule { }
