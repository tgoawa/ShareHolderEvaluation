import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

import { environment } from '../../../environments/environment';
const api = environment.envApi;
@Injectable()
export class TeamMemberService {

  constructor(private http: Http) { }

  getTeamMember(userName: string) {
    this.http.get(api + 'EmployeeService/GetEmployee' + userName)
    .map(response => response.json(), error => console.log('There was an http error'))
    .subscribe(data => {

    }, error => {
      console.log('There was an error with the team member data');
    });
  }
}
