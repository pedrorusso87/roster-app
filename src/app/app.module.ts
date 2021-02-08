import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { HomeComponent } from './components/home/home.component';
import { ContainerModule } from './containers/container.module';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from 'src/environments/environment';
import { UserService } from './services/user/user.service';
import { LoginModule } from './auth/login/login.module';
import { RegisterModule } from './auth/register/register.module';
import { NavbarComponent } from './shared/navbar/navbar.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    ContainerModule,
    LoginModule,
    RegisterModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
