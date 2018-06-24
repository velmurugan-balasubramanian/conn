import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './core/auth.guard';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { UniversityRegistationComponent } from './components/university-registation/university-registation.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { WelcomeComponent } from './components/welcome/welcome.component';


const routes: Routes = [
  { path: '', component: UniversityRegistationComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  { path: 'user', component: UserProfileComponent, canActivate: [AuthGuard]},
  { path: 'welcome', component: WelcomeComponent, canActivate: [AuthGuard]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
