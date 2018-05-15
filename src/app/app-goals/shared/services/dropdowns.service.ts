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

export interface ServiceLine {
  ServiceLine: string;
  ServiceLineId: number;
}

export interface WIG {
  GoalWIGId: number;
  WIGTitle: string;
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

  getServiceLines() {
    return this.http.get(api + 'ShareholderService/GetServiceLines/')
    .map(response => response.json(), error => console.log(error));
  }

  getWIGs(year: Number) {
    return this.http.get(api + 'GoalService/GetGoalWIGs/' + year)
    .map(response => response.json(), error => console.log(error));
  }
}
