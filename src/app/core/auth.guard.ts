import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';

import { Cookie } from 'ng2-cookies';
import { TeamMemberService } from './services/team-member.service';
import { TeamMember } from './model/team-member';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthGuard implements CanActivate {
  private teamMember: Observable<TeamMember>;

  constructor(
    private router: Router
  ) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (!Cookie.check('user')) {
      this.router.navigate(['login']);
      return false;
    } else {
      return true;
    }
  }
}
