import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppEvaluationsComponent } from './app-evaluations.component';
import { EvaluationsMainComponent } from './evaluations-main/evaluations-main.component';

const routes: Routes = [
  {
    path: '',
    component: AppEvaluationsComponent,
    children: [
      {path: 'main', component: EvaluationsMainComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppEvaluationsRoutingModule { }
