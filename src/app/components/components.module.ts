import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PlayerComponent } from './player/player.component';

@NgModule({
  declarations: [PlayerComponent],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
