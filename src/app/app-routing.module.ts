import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PlayerComponent } from './components/player/player.component';
import { TeamsContainerComponent } from './containers/teams-container/teams-container.component';

const routes: Routes = [

  {
    path: 'home',
    component: HomeComponent

  },
  {
    path: 'humanos',
    component: PlayerComponent
  },
  {
    path: 'equipos',
    component: TeamsContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
