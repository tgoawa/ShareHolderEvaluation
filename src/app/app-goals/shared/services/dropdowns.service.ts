import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import { environment } from '../../../../environments/environment';
const api = environment.envApi;

export interface Competency {
  Competency: string;
  GoalCompetencyId: number;
}

export interface CompetencyType {
  CompetencyType: string;
  GoalCompetencyTypeId: number;
}

@Injectable()
export class DropdownsService {

  constructor(private http: Http) {
  }

  getCompetencies() {
    return this.http.get(api + 'GoalService/GetGoalCompetencies/')
    .map(response => response.json(), error => console.log(error));
  }

  getCompetencyTypes() {
    return this.http.get(api + 'GoalService/GetGoalCompetencyTypes/')
    .map(response => response.json(), error => console.log(error));
  }

  getWIGs() {
    return this.http.get(api + 'GoalService/GetGoalWIGs/')
    .map(response => response.json(), error => console.log(error));
  }
}
