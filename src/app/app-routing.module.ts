import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppHomeComponent } from './app-home/app-home.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: AppHomeComponent},
  {path: 'goals', loadChildren: './app-goals/app-goals.module#AppGoalsModule'},
  {path: 'evaluations', loadChildren: './app-evaluations/app-evaluations.module#AppEvaluationsModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
