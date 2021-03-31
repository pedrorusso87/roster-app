import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PlayerComponent } from './components/player/player.component';
import { DashboardComponent } from './containers/dashboard/dashboard.component';
import { TeamsContainerComponent } from './containers/teams-container/teams-container.component';

const routes: Routes = [

  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'

  },
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
  },

  {
    path: 'dashboard',
    component: DashboardComponent
  },

  { path: 'login', loadChildren: () => import('./auth/login/login.module').then(m => m.LoginModule) },

  { path: 'register', loadChildren: () => import('./auth/register/register.module').then(m => m.RegisterModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
