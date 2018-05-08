import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/map';
import { environment } from '../../../../environments/environment';

const api = environment.envApi;

@Injectable()
export class EvaluationService {

  constructor(private http: Http) { }

  getEvaluationModel(teamMemberId: number, year: number) {
    return this.http.get(api + 'EvaluationService/GetEvaluationModel/' + teamMemberId + '/' + year )
    .map(response => response.json(), error => console.log(error));
  }

}
