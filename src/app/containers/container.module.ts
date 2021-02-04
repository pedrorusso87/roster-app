import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerContainerComponent } from './player-container/player-container.component';
import { TeamsContainerComponent } from './teams-container/teams-container.component';



@NgModule({
  declarations: [PlayerContainerComponent, TeamsContainerComponent],
  imports: [
    CommonModule
  ],
  exports: [PlayerContainerComponent, TeamsContainerComponent]
})
export class ContainerModule { }
