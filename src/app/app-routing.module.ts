import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AddPlayerComponent } from './components/player/add-player/add-player.component';
import { DashboardComponent } from './containers/dashboard/dashboard.component';
import { TeamsContainerComponent } from './containers/teams-container/teams-container.component';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [

  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',

  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [LoginGuard]

  },
  {
    path: 'humanos',
    component: AddPlayerComponent,
    canActivate: [LoginGuard]
  },
  {
    path: 'equipos',
    component: TeamsContainerComponent,
    canActivate: [LoginGuard]
  },

  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [LoginGuard]
  },

  { path: 'login', loadChildren: () => import('./auth/login/login.module').then(m => m.LoginModule) },

  { path: 'register', loadChildren: () => import('./auth/register/register.module').then(m => m.RegisterModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
