import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

import { environment } from '../../../environments/environment';
import { TeamMember } from '../model/team-member';
const api = environment.envApi;
@Injectable()
export class TeamMemberService {
  teamMember$: Observable<TeamMember>;
  private _teamMember: BehaviorSubject<TeamMember>;

  constructor(private http: Http) {
    this._teamMember = <BehaviorSubject<TeamMember>>new BehaviorSubject(null);
    this.teamMember$ = this._teamMember.asObservable();
  }

  getTeamMember(userName: string) {
    this.http.get(api + 'EmployeeService/GetEmployee/' + userName)
    .map(response => response.json(), error => console.log('There was an http error'))
    .subscribe(data => {
      this._teamMember.next(Object.assign({}, data));
    }, error => {
      console.log('There was an error with the team member data');
    });
  }
}
