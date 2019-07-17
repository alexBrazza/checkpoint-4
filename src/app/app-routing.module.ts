import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './Frontend #4/profile/profile.component';
import { LoginComponent } from './Frontend #4/login/login.component';
import { RegisterComponent } from './Frontend #4/register/register.component';
import { HomeComponent } from './Frontend #4/home/home.component';
import { AuthGuardService } from './Frontend #4/auth-guard.service';
import { AdminDashboardComponent } from './Frontend #4/admin-dashboard/admin-dashboard.component';
import { AddShowsComponent } from './Frontend #4/add-shows/add-shows.component';


const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'register', component: RegisterComponent
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'admin/dashboard', component: AdminDashboardComponent

  },
  {
    path: 'admin/dashboard/add', component: AddShowsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
