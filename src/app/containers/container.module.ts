import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerContainerComponent } from './player-container/player-container.component';
import { TeamsContainerComponent } from './teams-container/teams-container.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [PlayerContainerComponent, TeamsContainerComponent, DashboardComponent],
  imports: [
    CommonModule,
    NgbAlertModule
  ],
  exports: [PlayerContainerComponent, TeamsContainerComponent, DashboardComponent]
})
export class ContainerModule { }
