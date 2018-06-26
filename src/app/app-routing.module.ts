import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppHomeComponent } from './app-home/app-home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './core/auth.guard';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home',
    canActivate: [AuthGuard],
    component: AppHomeComponent},
  {path: 'goals',
    canActivate: [AuthGuard],
    loadChildren: './app-goals/app-goals.module#AppGoalsModule'},
  {path: 'evaluations',
    canActivate: [AuthGuard],
    loadChildren: './app-evaluations/app-evaluations.module#AppEvaluationsModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
