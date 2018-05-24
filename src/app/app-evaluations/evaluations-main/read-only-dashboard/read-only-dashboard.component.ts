import { Component, OnInit, Input } from '@angular/core';
import { EvaluationModel } from '../../shared/models/Evaluation';
import { PowerLevel } from '../../shared/models/powerLevel';
import { DashboardComponent } from '../dashboard/dashboard.component';

@Component({
  selector: 'app-read-only-dashboard',
  templateUrl: './read-only-dashboard.component.html',
  styleUrls: ['./read-only-dashboard.component.css']
})
export class ReadOnlyDashboardComponent extends DashboardComponent {

}
