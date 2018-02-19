import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import { environment } from '../../../../environments/environment';

const api = environment.envApi;
@Injectable()
export class DropdownsService {

  constructor(private http: Http) { }

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
