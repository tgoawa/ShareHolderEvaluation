import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import { environment } from '../../../../environments/environment';
import { EvaluationModel, GoalEvaluation, GoalTypeEvaluation } from '../models/Evaluation';

const api = environment.envApi;

@Injectable()
export class EvaluationService {
  evaluationModel$: Observable<EvaluationModel>;
  evaluationRatings = [ 10, 9, 8, 7, 6, 5, 4, 3, 2 , 1];
  private _evaluationModel: BehaviorSubject<EvaluationModel>;

  constructor(private http: Http) {
    this._evaluationModel = <BehaviorSubject<EvaluationModel>>new BehaviorSubject({});
    this.evaluationModel$ = this._evaluationModel.asObservable();
  }

  getEvaluationModel(teamMemberId: number, year: number) {
    return this.http.get(api + 'EvaluationService/GetEvaluationModel/' + teamMemberId + '/' + year )
    .map(response => response.json(), error => console.error('Error retrieving evaluations'))
    .subscribe(data => {
      this._evaluationModel.next(Object.assign({}, data));
    }, error => console.error('Could not load evaluations'));
  }

  getEconomicGoals(teamMemberId: number, year: number) {
    return this.http.get(api + 'GoalService/getEconomicGoals/' + teamMemberId + '/' + year)
    .map(response => response.json(), error => console.log(error));
  }

  getPowerLevels() {
    return this.http.get(api + 'EvaluationService/GetPowerLevels/')
    .map(response => response.json(), error => console.error(error));
  }

  updateEvaluationTotalScore(evaluation: EvaluationModel) {
    return this.http.put(api + 'EvaluationService/updateEvaluationTotalScore/', evaluation)
    .map(response => response.json(), error => console.error(error));
  }

  updateEvaluationGoal(evaluationGoal: GoalEvaluation) {
    return this.http.put(api + 'EvaluationService/updateEvaluationGoal/', evaluationGoal)
    .map(response => response.json(), error => console.error(error));
  }

  updateEvaluationGoalType(goalTypeEvaluation: GoalTypeEvaluation) {
    return this.http.put(api + 'EvaluationService/updateEvaluationGoalType/', goalTypeEvaluation)
    .map(response => response.json(), error => console.error(error));
  }

}
