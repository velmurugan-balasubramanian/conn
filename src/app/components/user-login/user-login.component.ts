import { Component, OnInit } from '@angular/core';


import { AuthService } from '../../core/auth.service';
import { map, switchMap, switchMapTo } from 'rxjs/operators';
import { Observable, pipe,of, observable} from 'rxjs';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { AngularFireAuth, AngularFireAuthModule } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { AppRoutingModule } from '../../app-routing.module';
import { User } from '../../models/user';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {
  userLogin:any ={};
  constructor(private auth: AuthService,private afAuth:AngularFireAuth, private afs:AngularFirestore, private router:Router) { }

  ngOnInit() {
  }

  onUserSubmitLogin() {
     return this.afAuth.auth.signInWithEmailAndPassword(this.userLogin.userEmailL, this.userLogin.userPasswordL)
     .then(credential => {
        this.router.navigate(['/user']);
     })
   }
}
