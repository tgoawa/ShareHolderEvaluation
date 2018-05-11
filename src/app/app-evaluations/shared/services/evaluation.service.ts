import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import { environment } from '../../../../environments/environment';
import { EvaluationModel } from '../models/Evaluation';

const api = environment.envApi;

@Injectable()
export class EvaluationService {
  evaluationModel$: Observable<EvaluationModel>;
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

}
