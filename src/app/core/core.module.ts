import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { throwIfAlreadyLoaded } from './module-import.guard';
import { TeamMemberService } from './services/team-member.service';
import { LoginService } from './services/login.service';
import { AuthGuard } from './auth.guard';
import { YearSelectionService } from './services/year-selection.service';
import { ReadOnlyService } from './services/read-only.service';

@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ],
  declarations: [],
  providers: [LoginService, TeamMemberService, AuthGuard, YearSelectionService, ReadOnlyService]
})
export class CoreModule {
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
