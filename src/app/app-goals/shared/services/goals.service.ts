import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import { environment } from '../../../../environments/environment';
import { GoalTypeWeightData, GoalWeightModel } from '../../goals-main/model/weight';
const api = environment.envApi;

@Injectable()
export class GoalsService {
  constructor(private http: Http) {}

  getCompetencyGoals(id: number) {
    return this.http.get(api + 'GoalService/GetCompetencyGoals/' + id)
      .map(response => response.json(), error => console.log(error));
  }

  getWIGGoals(id: number) {
    return this.http.get(api + 'GoalService/GetWigGoals/' + id)
      .map(response => response.json(), error => console.log(error));
  }

  getGoals(teamMemberId: number) {
    return this.http.get(api + 'ShareholderService/GetDashboardModel/' + teamMemberId)
    .map(response => response.json(), error => console.log(error));
  }

  updateGoalWeight(goalWeightObj: GoalWeightModel) {
    return this.http.put(api + 'ShareholderService/UpdateGoalWeights/', goalWeightObj)
    .map(response => response.json(), error => console.log(error));
  }
}
