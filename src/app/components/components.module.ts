import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerComponent } from './player/player.component';
import { TeamComponent } from './team/team.component';
import { ContainerModule } from '../containers/container.module';
import { NumericDirective } from './player/numbers-only.directive';
import { LoginComponent } from '../auth/login/login.component';
import { LoginModule } from '../auth/login/login.module';
import { AuthService } from '../auth/services/auth.service';

@NgModule({
  declarations: [PlayerComponent, TeamComponent, NumericDirective],
  imports: [
    CommonModule,
    ContainerModule,
    LoginModule
  ],
  providers: [AuthService]
})
export class ComponentsModule { }
