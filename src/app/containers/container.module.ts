import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerContainerComponent } from './player-container/player-container.component';
import { TeamsContainerComponent } from './teams-container/teams-container.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { CreateMatchContainerComponent } from './create-match-container/create-match-container.component';
import { ComponentsModule } from '../components/components.module';
import { MatchesService } from '../services/matches/matches.service';
@NgModule({
  declarations: [PlayerContainerComponent, TeamsContainerComponent,
    DashboardComponent, CreateMatchContainerComponent, ],
  imports: [
    ComponentsModule,
    CommonModule,
    NgbAlertModule
  ],
  exports: [PlayerContainerComponent, TeamsContainerComponent, DashboardComponent],
  providers: [MatchesService]
})
export class ContainerModule { }
