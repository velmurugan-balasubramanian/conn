import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CoreModule} from './core/core.module';
import { environment } from '../environments/environment';
export const firebaseConfig = environment.firebaseConfig;
import { AngularFireModule } from 'angularfire2';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UniversityRegistationComponent } from './university-registation/university-registation.component';
import { UniRegistrationComponent } from './uni-registration/uni-registration.component';



@NgModule({
  declarations: [
    AppComponent,
    UniversityRegistationComponent,
    UniRegistrationComponent,

  ],
  imports: [
    BrowserModule,
    CoreModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
