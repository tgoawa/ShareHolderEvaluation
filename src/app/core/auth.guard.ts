import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import { LoginService } from './services/login.service';
import { TeamMemberService } from './services/team-member.service';
import { TeamMember } from './model/team-member';

@Injectable()
export class AuthGuard implements CanActivate {
  teamMember: TeamMember;
  constructor(private router: Router,
    private lsService: LoginService,
    private tmService: TeamMemberService) {
      this.tmService.teamMember$.subscribe(data => this.teamMember = data);
    }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      if (this.teamMember.IsShareHolder) {
        return true;
      }
      return true;
  }
}
