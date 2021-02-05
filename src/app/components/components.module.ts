import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerComponent } from './player/player.component';
import { TeamComponent } from './team/team.component';
import { ContainerModule } from '../containers/container.module';
import { NumericDirective } from './player/numbers-only.directive';

@NgModule({
  declarations: [PlayerComponent, TeamComponent, NumericDirective],
  imports: [
    CommonModule,
    ContainerModule
  ]
})
export class ComponentsModule { }
