import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/auth.service';
import { map, switchMap, switchMapTo } from 'rxjs/operators';
import { Observable, pipe,of, observable} from 'rxjs';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { AngularFireAuth, AngularFireAuthModule } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { University } from '../../models/university';
import { AppRoutingModule } from '../../app-routing.module';

@Component({
  selector: 'app-uni-login',
  templateUrl: './uni-login.component.html',
  styleUrls: ['./uni-login.component.scss']
})
export class UniLoginComponent implements OnInit {

 // universityCollection: AngularFirestoreCollection<any>;
  universityDoc: AngularFirestoreDocument<any>;
  unversity:Observable<University>;
  universities : Observable<University>;
  uniLogin: any = {};
  constructor(private auth: AuthService,private afAuth:AngularFireAuth, private afs:AngularFirestore, private router:Router ) { }

  ngOnInit() {}
  onSubmitLogin() {
   //this.router.navigate(['/home']);
   // alert("called onsubmit function");
    //this.auth.emailLogin(this.uniLogin.uniName1, this.uniLogin.uniPassword1);
    return this.afAuth.auth.signInWithEmailAndPassword(this.uniLogin.uniName1, this.uniLogin.uniPassword1)
    .then(credential => {
      this.universityDoc  = this.afs.doc(`universities/${credential.user.uid}`);
      this.universities = this.universityDoc.valueChanges();
      alert("inside callback");
      console.log("Credential",credential);

      let state= this.afAuth.user;
      console.log("what the hell", state )
     state.subscribe(res => console.log("Fuck yeshhh",res));
     
      this.router.navigate(['/home']);

      
    })
    //this.auth.allUniversityData(this.model)
  }
}
