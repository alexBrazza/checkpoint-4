import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './Frontend #4/profile/profile.component';
import { LoginComponent } from './Frontend #4/login/login.component';
import { RegisterComponent } from './Frontend #4/register/register.component';
import { HomeComponent } from './Frontend #4/home/home.component';
import { AuthenticationService } from './Frontend #4/authentication.service';
import { AuthGuardService } from './Frontend #4/auth-guard.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SliderComponent } from './Frontend #4/slider/slider.component';
import { AdminDashboardComponent } from './Frontend #4/admin-dashboard/admin-dashboard.component';
import { AdminSpectacleComponent } from './Frontend #4/admin-spectacle/admin-spectacle.component';
import { AddShowsComponent } from './Frontend #4/add-shows/add-shows.component';
import { MapComponent } from './Frontend #4/map/map.component';
import { AgmCoreModule } from '@agm/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    SliderComponent,
    AdminDashboardComponent,
    AdminSpectacleComponent,
    AddShowsComponent,
    MapComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD7HncxityOh8mcNfelozLgLjMatG3dvu0'
    }),
    NgbModule

  ],
  providers: [AuthenticationService, AuthGuardService],
  bootstrap: [AppComponent],

})
export class AppModule { }
