import { Component, OnInit } from '@angular/core';
import { TeamMember } from '../core/model/team-member';
import { TeamMemberService } from '../core/services/team-member.service';

import { Cookie } from 'ng2-cookies';

@Component({
  selector: 'app-app-home',
  templateUrl: './app-home.component.html',
  styleUrls: ['./app-home.component.css']
})
export class AppHomeComponent implements OnInit {
  teamMember: TeamMember;
  constructor(private tmService: TeamMemberService) { }

  ngOnInit() {
    this.tmService.teamMember$.subscribe(data => this.teamMember = data);
    console.log(Cookie.get('user'));
  }

  getTeamMember() {

  }

}
