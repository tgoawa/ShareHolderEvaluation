import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GoalsMainComponent } from './goals-main/goals-main.component';
import { AppGoalsComponent } from './app-goals.component';

const routes: Routes = [
{
  path: '',
  component: AppGoalsComponent,
  children: [
    {path: 'main', component: GoalsMainComponent}
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppGoalsRoutingModule { }