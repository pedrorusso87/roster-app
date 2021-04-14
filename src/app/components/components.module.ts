import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamComponent } from './team/team.component';
import { NumericDirective } from './player/numbers-only.directive';
import { LoginModule } from '../auth/login/login.module';
import { AuthService } from '../auth/services/auth.service';
import { reducers } from './player/store';
import { StoreModule } from '@ngrx/store';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { AddPlayerComponent } from './player/add-player/add-player.component';
import { PlayersLimitComponent } from './player/players-limit/players-limit.component';
@NgModule({
  declarations: [AddPlayerComponent, TeamComponent, NumericDirective, PlayersLimitComponent],
  imports: [
    CommonModule,
    LoginModule,
    StoreModule.forFeature('playersList', reducers),
    NgbAlertModule
  ],
  exports: [AddPlayerComponent, PlayersLimitComponent],
  providers: [AuthService]
})
export class ComponentsModule { }
