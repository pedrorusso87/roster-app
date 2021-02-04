import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerComponent } from './player/player.component';
import { TeamComponent } from './team/team.component';
import { ContainerModule } from '../containers/container.module';

@NgModule({
  declarations: [PlayerComponent, TeamComponent],
  imports: [
    CommonModule,
    ContainerModule
  ]
})
export class ComponentsModule { }
