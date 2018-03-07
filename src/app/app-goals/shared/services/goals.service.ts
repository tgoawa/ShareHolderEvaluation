import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import { environment } from '../../../../environments/environment';
import { GoalTypeWeightData, GoalWeightModel } from '../../goals-main/model/weight';
import { GoalData } from '../../models/goal';
import { EconomicGoal } from '../../models/economic-goal';
const api = environment.envApi;

@Injectable()
export class GoalsService {
  constructor(private http: Http) {}

  getCompetencyGoals(id: number) {
    return this.http.get(api + 'GoalService/GetCompetencyGoals/' + id)
      .map(response => response.json(), error => console.log(error));
  }

  getDashboardGoals(teamMemberId: number, year: number) {
    return this.http.get(api + 'ShareholderService/GetDashboardModel/' + teamMemberId + '/' + year)
    .map(response => response.json(), error => console.log(error));
  }

  getEconomicGoals(teamMemberId: number, year: number) {
    return this.http.get(api + 'GoalService/getEconomicGoals/' + teamMemberId + '/' + year)
    .map(response => response.json(), error => console.log(error));
  }

  getGoals(id: number, goalTypeId: number, year: number) {
    return this.http.get(api + 'GoalService/GetGoalsByYear/' + id + '/' + goalTypeId + '/' + year)
      .map(response => response.json(), error => console.log(error));
  }

  getWIGGoals(id: number) {
    return this.http.get(api + 'GoalService/GetWigGoals/' + id)
      .map(response => response.json(), error => console.log(error));
  }

  updateEconomicGoal(econGoal: EconomicGoal) {
    return this.http.put(api + 'GoalService/UpdateSHEconomicGoal/', econGoal)
    .map(response => response.json(), error => console.log(error));
  }

  updateEconomicGoalWeight(goalWeightObj: GoalWeightModel) {
    return this.http.put(api + 'ShareholderService/UpdateEconomicWeight/', goalWeightObj)
    .map(response => response.json(), error => console.log(error));
  }

  updateGoalWeight(goalWeightObj: GoalWeightModel) {
    return this.http.put(api + 'ShareholderService/UpdateGoalWeights/', goalWeightObj)
    .map(response => response.json(), error => console.log(error));
  }

  saveGoal(goal: GoalData) {
    return this.http.post(api + 'GoalService/SaveGoal/', goal)
    .map(response => response.json(), error => console.log(error));
  }

  updateGoal(goal: GoalData) {
    return this.http.post(api + 'GoalService/UpdateGoal/', goal)
    .map(response => response.json(), error => console.log(error));
  }
}
