import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CoreModule} from './core/core.module';
import { environment } from '../environments/environment';
export const firebaseConfig = environment.firebaseConfig;
import { AngularFireModule } from 'angularfire2';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { GetAllUniversityService } from './services/get-all-university.service'



import { AppComponent } from './app.component';
import { UniversityRegistationComponent } from './components/university-registation/university-registation.component';
import { UniRegistrationComponent } from './components/uni-registration/uni-registration.component';
import { UniLoginComponent } from './components/uni-login/uni-login.component';
import { HomeComponent } from './components/home/home.component';
import { UserRegistrationComponent } from './components/user-registration/user-registration.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { UserComponent } from './user/user.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { NavbarComponent } from './components/navbar/navbar.component';



@NgModule({
  declarations: [
    AppComponent,
    UniversityRegistationComponent,
    UniRegistrationComponent,
    UniLoginComponent,
    HomeComponent,
    UserRegistrationComponent,
    UserLoginComponent,
    UserComponent,
    UserProfileComponent,
    WelcomeComponent,
    NavbarComponent,

  ],
  imports: [
    BrowserModule,
    CoreModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig)

  ],
  providers: [GetAllUniversityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
